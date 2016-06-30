package es.urjc.code.daw.eSportium.user;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.annotation.JsonView;

import es.urjc.code.daw.eSportium.apuesta.Apuesta;
import es.urjc.code.daw.eSportium.equipo.Image;
import es.urjc.code.daw.eSportium.juego.Juego;
import es.urjc.code.daw.eSportium.partido.Partido;
import es.urjc.code.daw.eSportium.partido.PartidoController;

@RestController
@RequestMapping("/usuarios")
public class UserController {
	
	@Autowired
	private UserComponent usercomponent;
	
	private static final Path FILES_FOLDER = Paths.get(System.getProperty("user.dir"), "files");

	private static final Logger log = LoggerFactory.getLogger(PartidoController.class);

	@Autowired
	private UserRepository repository;
	
	interface UserListView extends User.BasicAtt{}
	
	@JsonView(UserListView.class)
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public Collection<User> getUsers(){
		return repository.findAll();
	}
	
	
	@JsonView(UserListView.class)
	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public ResponseEntity<User> getUser(@PathVariable long id/*, HttpServletResponse res*/) throws FileNotFoundException, IOException {
		log.info("Get User {}", id);
		boolean sec = true;
		
		long userloggedId = usercomponent.getLoggedUser().getId();
		List<String> roles = new ArrayList<String>();
		roles = usercomponent.getLoggedUser().getRoles();
		
		if(userloggedId != id)
			sec = false;
		for( String s : roles){
			if (s.equals("ROLE_ADMIN")){
				//log.info("Rol : {}",s);
				sec = true;
			}
		}
		User user = repository.findOne(id);
		if(user != null && sec){		
			return new ResponseEntity<>(user, HttpStatus.OK);
		}else{
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	//Get de imagen
	@JsonView(UserListView.class)
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
	
	@JsonView(UserListView.class)
	@RequestMapping(value = "/", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public User nuevoUser(@RequestBody User user){
		User nUser = user;
		nUser.setPasswordHash(new BCryptPasswordEncoder().encode(user.getEstaeslacont()));
		nUser.setEstaeslacont(null);
		List<String> l = new ArrayList<String>();
		l.add("ROLE_USER");
		nUser.setRoles(l);
		repository.save(nUser);
		
		return user;
	}
	
	//Subimos la imagen
	@JsonView(UserListView.class)
	@RequestMapping(value = "/image/upload/{id}", method = RequestMethod.POST)
	public User handleFileUpload(@PathVariable long id, @RequestParam MultipartFile file) throws IOException {
		User user = repository.findOne(id);
		if (user != null){
			if (file.isEmpty()) {
				throw new RuntimeException("The file is empty");
			}

			if (!Files.exists(FILES_FOLDER)) {
				Files.createDirectories(FILES_FOLDER);
			}

			String fileName = "image-" + user.getName() + ".jpg";
			File uploadedFile = new File(FILES_FOLDER.toFile(), fileName);
			file.transferTo(uploadedFile);
			user.setFoto(fileName);
			
			repository.save(user);

			Image image = new Image("hello", fileName);

			

			return user;
		}else{
			return null;
		}
	}
	
	@JsonView(UserListView.class)
	@RequestMapping(value ="/{id}", method = RequestMethod.PUT)
	public ResponseEntity<User> editarUser(@PathVariable long id, @RequestBody User updatedUser)throws IOException{
		User user = repository.findOne(id);
		boolean sec = true;
		
		long userloggedId = usercomponent.getLoggedUser().getId();
		if(userloggedId != id)
			sec = false;
		if (user != null && sec){
			updatedUser.setId(id);
			updatedUser.setRoles(user.getRoles());
			updatedUser.setFoto(user.getFoto());			
			if(updatedUser.getEstaeslacont() == (null)){
				//El usuario quiere editar pero sin cambiar la contraseña
				updatedUser.setPasswordHash(user.getPasswordHash());
			}else{
				//El usuario quiere editar además cambiando la contraseña
				updatedUser.setPasswordHash(new BCryptPasswordEncoder().encode(updatedUser.getEstaeslacont()));
				updatedUser.setEstaeslacont(null);
				
			}
			repository.save(updatedUser);
			usercomponent.setLoggedUser(updatedUser);
			return new ResponseEntity<>(updatedUser, HttpStatus.OK);
		}else{
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	//Método igual que el put pero solamente para actualizar el karma, requiere privilegios de Admin
	@JsonView(UserListView.class)
	@RequestMapping(value ="/actKarma/{id}", method = RequestMethod.PUT)
	public ResponseEntity<User> editarUserKarma(@PathVariable long id, @RequestBody User updatedUser)throws IOException{
		User user = repository.findOne(id);
		boolean sec = true;
		
		long userloggedId = usercomponent.getLoggedUser().getId();
		if(userloggedId != id)
			sec = false;
		if (user != null){
			updatedUser.setId(id);
			updatedUser.setRoles(user.getRoles());
			updatedUser.setFoto(user.getFoto());			
			if(updatedUser.getEstaeslacont() == (null)){
				//El usuario quiere editar pero sin cambiar la contraseña
				updatedUser.setPasswordHash(user.getPasswordHash());
			}else{
				//El usuario quiere editar además cambiando la contraseña
				updatedUser.setPasswordHash(new BCryptPasswordEncoder().encode(updatedUser.getEstaeslacont()));
				updatedUser.setEstaeslacont(null);
				
			}
			repository.save(updatedUser);
			
			if(userloggedId == id){
				usercomponent.setLoggedUser(updatedUser);
			}
			return new ResponseEntity<>(updatedUser, HttpStatus.OK);
		}else{
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@JsonView(UserListView.class)
	@RequestMapping(value = "/doAdmin/{id}", method = RequestMethod.PUT)
	public ResponseEntity<User> hacerAdmin(@PathVariable long id){
		User user = repository.findOne(id);
		
		if(user != null){
			List<String> l = new ArrayList<String>();
			l = user.getRoles();
			if(l.contains("ROLE_ADMIN")){
				return new ResponseEntity<>(HttpStatus.NOT_FOUND);
			}else{
				l.add("ROLE_ADMIN");
				user.setRoles(l);
				repository.save(user);
				return new ResponseEntity<>(user, HttpStatus.OK);
			}			
		}else{
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@JsonView(UserListView.class)
	@RequestMapping(value = "/actLog/{id}", method = RequestMethod.GET)
	public ResponseEntity<User> actLogged(@PathVariable long id){
		
		User u = repository.findOne(id);
		//log.info("{}",u);
		//log.info("{}",usercomponent.isLoggedUser());
		if(usercomponent.isLoggedUser()){
			if( u != null){
				
				usercomponent.setLoggedUser(u);
				return new ResponseEntity<>(u, HttpStatus.OK);
			}
		}
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}
	
	@JsonView(UserListView.class)
	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<User> borraUser(@PathVariable long id){
		if(repository.exists(id)){
			repository.delete(id);
			return new ResponseEntity<>(null, HttpStatus.OK);
		}else{
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
}
