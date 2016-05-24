package es.urjc.code.daw.eSportium.apuesta;

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
import es.urjc.code.daw.eSportium.juego.Juego;
import es.urjc.code.daw.eSportium.jugador.Jugador;
import es.urjc.code.daw.eSportium.partido.Partido;
import es.urjc.code.daw.eSportium.user.User;

@RestController
@RequestMapping("/apuestas")
public class ApuestaController {

	private static final Logger log = LoggerFactory.getLogger(ApuestaController.class);

	@Autowired
	private ApuestaRepository repository;
	
	interface ApuestaListView extends Apuesta.BasicAtt, Apuesta.UserAtt, Juego.BasicAtt, Equipo.BasicAtt, Apuesta.PartidoAtt, Partido.BasicAtt, User.BasicAtt, Apuesta.EquipoAtt{}

	@JsonView(ApuestaListView.class)
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public Collection<Apuesta> getApuestas() {
		return repository.findAll();
	}

	@JsonView(ApuestaListView.class)
	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public ResponseEntity<Apuesta> getApuesta(@PathVariable long id) {

		log.info("Get apuesta {}", id);

		Apuesta apuesta = repository.findOne(id);
		if (apuesta != null) {
			return new ResponseEntity<>(apuesta, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@RequestMapping(value = "/", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public Apuesta nuevaApuesta(@RequestBody Apuesta apuesta) {

		repository.save(apuesta);

		return apuesta;
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Apuesta> actulizaApuesta(@PathVariable long id, @RequestBody Apuesta updatedApuesta) {

		Apuesta apuesta = repository.findOne(id);
		if (apuesta != null) {

			updatedApuesta.setId(id);
			repository.save(updatedApuesta);

			return new ResponseEntity<>(updatedApuesta, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Apuesta> borraPartido(@PathVariable long id) {

		if (repository.exists(id)) {
			repository.delete(id);
			return new ResponseEntity<>(null, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

}
