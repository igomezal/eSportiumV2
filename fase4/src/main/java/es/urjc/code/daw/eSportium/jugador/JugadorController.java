package es.urjc.code.daw.eSportium.jugador;

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

@RestController
@RequestMapping("/jugadores")
public class JugadorController {

	private static final Logger log = LoggerFactory.getLogger(JugadorController.class);

	@Autowired
	private JugadorRepository repository;
	
	interface JugadorListView extends Jugador.BasicAtt, Jugador.EquipoAtt, Equipo.BasicAtt{}

	@JsonView(JugadorListView.class)
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public Collection<Jugador> getJuegadores() {
		return repository.findAll();
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public ResponseEntity<Jugador> getJugador(@PathVariable long id) {

		log.info("Get jugador {}", id);

		Jugador jugador = repository.findOne(id);
		if (jugador != null) {
			return new ResponseEntity<>(jugador, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@RequestMapping(value = "/", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public Jugador nuevoJugador(@RequestBody Jugador jugador) {

		repository.save(jugador);

		return jugador;
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Jugador> actulizaJugador(@PathVariable long id, @RequestBody Jugador updatedJugador) {

		Jugador jugador = repository.findOne(id);
		if (jugador != null) {

			updatedJugador.setId(id);
			repository.save(updatedJugador);

			return new ResponseEntity<>(updatedJugador, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Jugador> borraJugador(@PathVariable long id) {

		if (repository.exists(id)) {
			repository.delete(id);
			return new ResponseEntity<>(null, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

}
