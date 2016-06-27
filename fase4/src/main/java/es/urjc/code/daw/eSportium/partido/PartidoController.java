package es.urjc.code.daw.eSportium.partido;

import java.util.Collection;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonView;

import es.urjc.code.daw.eSportium.apuesta.Apuesta;
import es.urjc.code.daw.eSportium.equipo.Equipo;
import es.urjc.code.daw.eSportium.juego.Juego;

@RestController
@RequestMapping("/partidos")
public class PartidoController {

	private static final Logger log = LoggerFactory.getLogger(PartidoController.class);

	@Autowired
	private PartidoRepository repository;
	
	interface PartidoListView extends Partido.BasicAtt, Partido.JuegoAtt, Juego.BasicAtt, Equipo.BasicAtt, Apuesta.EquipoAtt, Apuesta.PartidoAtt, Apuesta.BasicAtt{}

	@JsonView(PartidoListView.class)
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public Collection<Partido> getPartidos() {
		return repository.findAll();
	}

	@JsonView(PartidoListView.class)
	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public ResponseEntity<Partido> getPartido(@PathVariable long id) {

		log.info("Get partido {}", id);

		Partido partido = repository.findOne(id);
		if (partido != null) {
			return new ResponseEntity<>(partido, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@RequestMapping(value = "/", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public Partido nuevoPartido(@RequestBody Partido partido) {

		repository.save(partido);

		return partido;
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Partido> actulizaPartido(@PathVariable long id, @RequestBody Partido updatedPartido) {

		Partido partido = repository.findOne(id);
		if (partido != null) {

			updatedPartido.setId(id);
			updatedPartido.setApuestas(partido.getApuestas());
			repository.save(updatedPartido);

			return new ResponseEntity<>(updatedPartido, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Partido> borraPartido(@PathVariable long id) {

		if (repository.exists(id)) {
			repository.delete(id);
			return new ResponseEntity<>(null, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

}
