package es.urjc.code.daw.eSportium.equipo;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Collection;

import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import es.urjc.code.daw.eSportium.jugador.Jugador;
import es.urjc.code.daw.eSportium.user.User;

import com.fasterxml.jackson.annotation.JsonView;

@RestController
@RequestMapping("/equipos")
public class EquipoController {
	
	private static final Path FILES_FOLDER = Paths.get(System.getProperty("user.dir"), "files");

	private static final Logger log = LoggerFactory.getLogger(EquipoController.class);
	
	interface EquipoListView extends Equipo.BasicAtt,Equipo.JugadoresAtt,Jugador.BasicAtt{}

	@Autowired
	private EquipoRepository repository;
	
	@JsonView(EquipoListView.class)
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public Collection<Equipo> getEquipos() {
		return repository.findAll();
	}
	
	@JsonView(EquipoListView.class)
	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public ResponseEntity<Equipo> getEquipo(@PathVariable long id) {

		log.info("Get equipo {}", id);

		Equipo equipo = repository.findOne(id);
		if (equipo != null) {
			return new ResponseEntity<>(equipo, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	//Get de imagen
	@RequestMapping("/images/{fileName:.+}")
	public void handleFileDownload(@PathVariable String fileName, HttpServletResponse res)
			throws FileNotFoundException, IOException {
		
		Path image = FILES_FOLDER.resolve(fileName);

		if (Files.exists(image)) {
			res.setContentType("image/jpeg");
			res.setContentLength((int) image.toFile().length());
			FileCopyUtils.copy(Files.newInputStream(image), res.getOutputStream());
			
		} else {
			res.sendError(404, "File" + fileName + "(" + image.toAbsolutePath() + ") does not exist");
		}
	}
	
	//Subimos la imagen
	@JsonView(EquipoListView.class)
	@RequestMapping(value = "/image/upload/{id}", method = RequestMethod.POST)
	public Equipo handleFileUpload(@PathVariable long id, @RequestParam MultipartFile file) throws IOException {
		Equipo eq = repository.findOne(id);
		if (eq != null){
			if (file.isEmpty()) {
				throw new RuntimeException("The file is empty");
			}

			if (!Files.exists(FILES_FOLDER)) {
				Files.createDirectories(FILES_FOLDER);
			}

			String fileName = "image-" + eq.getNombre() + ".jpg";
			File uploadedFile = new File(FILES_FOLDER.toFile(), fileName);
			file.transferTo(uploadedFile);
			eq.setLogo(fileName);
			log.info("Subida imagen :"+eq.getLogo());
			repository.save(eq);

			Image image = new Image("hello", fileName);

			

			return eq;
		}else{
			return null;
		}
	}

	@JsonView(EquipoListView.class)
	@RequestMapping(value = "/", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public Equipo nuevoEquipo(@RequestBody Equipo equipo) {

		repository.save(equipo);

		return equipo;
	}

	@JsonView(EquipoListView.class)
	@RequestMapping(value = "/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Equipo> actulizaEquipo(@PathVariable long id, @RequestBody Equipo updatedEquipo) {

		Equipo equipo = repository.findOne(id);
		if (equipo != null) {

			updatedEquipo.setId(id);
			updatedEquipo.setLogo(equipo.getLogo());
			updatedEquipo.setJugadores(equipo.getJugadores());
			repository.save(updatedEquipo);

			return new ResponseEntity<>(updatedEquipo, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Equipo> borraEquipo(@PathVariable long id) {

		if (repository.exists(id)) {
			repository.delete(id);
			return new ResponseEntity<>(null, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

}
