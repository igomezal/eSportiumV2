package es.urjc.code.daw.eSportium.user;

import java.util.Collection;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonView;

import es.urjc.code.daw.eSportium.apuesta.Apuesta;
import es.urjc.code.daw.eSportium.juego.Juego;
import es.urjc.code.daw.eSportium.partido.Partido;
import es.urjc.code.daw.eSportium.partido.PartidoController;

@RestController
@RequestMapping("/usuarios")
public class UserController {

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
	public ResponseEntity<User> getUser(@PathVariable long id){
		log.info("Get User {}", id);
		
		User user = repository.findOne(id);
		if(user != null){
			return new ResponseEntity<>(user, HttpStatus.OK);
		}else{
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@RequestMapping(value = "/", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public User nuevoUser(@RequestBody User user){
		User nUser = user;
		nUser.setPasswordHash(new BCryptPasswordEncoder().encode(user.getPasswordHash()));
		repository.save(nUser);
		
		return user;
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.PUT)
	public ResponseEntity<User> actualizaUser(@PathVariable long id, @RequestBody User updatedUser){
		User user = repository.findOne(id);
		if(user != null){
			updatedUser.setId(id);
			repository.save(updatedUser);
			return new ResponseEntity<>(updatedUser, HttpStatus.OK);
		}else{
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	
	}
	
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
