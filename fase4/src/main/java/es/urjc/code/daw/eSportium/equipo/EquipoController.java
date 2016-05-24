package es.urjc.code.daw.eSportium.equipo;

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

import es.urjc.code.daw.eSportium.jugador.Jugador;


import com.fasterxml.jackson.annotation.JsonView;

@RestController
@RequestMapping("/equipos")
public class EquipoController {

	private static final Logger log = LoggerFactory.getLogger(EquipoController.class);
	
	interface EquipoListView extends Equipo.BasicAtt, Equipo.JugadoresAtt, Jugador.BasicAtt{}

	@Autowired
	private EquipoRepository repository;
	
	@JsonView(EquipoListView.class)
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public Collection<Equipo> getEquipos() {
		return repository.findAll();
	}

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

	@RequestMapping(value = "/", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public Equipo nuevoEquipo(@RequestBody Equipo equipo) {

		repository.save(equipo);

		return equipo;
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Equipo> actulizaEquipo(@PathVariable long id, @RequestBody Equipo updatedEquipo) {

		Equipo equipo = repository.findOne(id);
		if (equipo != null) {

			updatedEquipo.setId(id);
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
