package es.urjc.code.daw.eSportium.juego;

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

import es.urjc.code.daw.eSportium.equipo.Equipo;
import es.urjc.code.daw.eSportium.partido.Partido;

@RestController
@RequestMapping("/juegos")
public class JuegoController {

	private static final Logger log = LoggerFactory.getLogger(JuegoController.class);

	@Autowired
	private JuegoRepository repository;
	
	interface JuegoListView extends Juego.BasicAtt, Juego.PartidosAtt, Partido.BasicAtt, Equipo.BasicAtt{}

	@JsonView(JuegoListView.class)
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public Collection<Juego> getJuegos() {
		return repository.findAll();
	}

	@JsonView(JuegoListView.class)
	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public ResponseEntity<Juego> getJuego(@PathVariable long id) {

		log.info("Get juego {}", id);

		Juego juego = repository.findOne(id);
		if (juego != null) {
			return new ResponseEntity<>(juego, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@RequestMapping(value = "/", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public Juego nuevoJuego(@RequestBody Juego juego) {

		repository.save(juego);

		return juego;
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Juego> actulizaJuego(@PathVariable long id, @RequestBody Juego updatedJuego) {

		Juego juego = repository.findOne(id);
		if (juego != null) {

			updatedJuego.setId(id);
			repository.save(updatedJuego);

			return new ResponseEntity<>(updatedJuego, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Juego> borraJuego(@PathVariable long id) {

		if (repository.exists(id)) {
			repository.delete(id);
			return new ResponseEntity<>(null, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

}
