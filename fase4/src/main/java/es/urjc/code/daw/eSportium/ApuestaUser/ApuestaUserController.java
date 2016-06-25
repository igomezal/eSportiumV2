package es.urjc.code.daw.eSportium.ApuestaUser;

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
import es.urjc.code.daw.eSportium.user.User;

@RestController
@RequestMapping("/apuestaUser")
public class ApuestaUserController {
	
	private static final Logger log = LoggerFactory.getLogger(ApuestaUserController.class);

	@Autowired
	private ApuestaUserRepository repository;
	
	interface ApuestaUserBasicAtt extends ApuestaUser.BasicAtt, User.BasicAtt{}
	
	@JsonView(ApuestaUserBasicAtt.class)
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public Collection<ApuestaUser> getApuestaUserAll(){
		return repository.findAll();
	}
	
	@JsonView(ApuestaUserBasicAtt.class)
	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public ResponseEntity<ApuestaUser> getApuestaUser(@PathVariable long id){
		log.info("Get ApuestaUser {}, id");
		
		ApuestaUser apuestauser = repository.findOne(id);
		if (apuestauser != null){
			return new ResponseEntity<>(apuestauser, HttpStatus.OK);
		} else{
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@JsonView(ApuestaUserBasicAtt.class)
	@RequestMapping(value = "/user/{id}", method = RequestMethod.GET)
	public Collection<ApuestaUser> getApuestasDeUser(@PathVariable long id){
		log.info("Get Apuestas del User {}", id);
		
		User u = new User();
		u.setId(id);
		
		return repository.findByUser(u);
	}
	
	@JsonView(ApuestaUserBasicAtt.class)
	@RequestMapping(value = "/apuesta/{id}", method = RequestMethod.GET)
	public Collection<ApuestaUser> getUserDeApuesta(@PathVariable long id){
		log.info("Get user de apuesta {}", id);
		
		Apuesta a = new Apuesta();
		a.setId(id);
		
		return repository.findByApuesta(a);
	}
	
	@RequestMapping(value = "/", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public ApuestaUser nuevaApuestaUser(@RequestBody ApuestaUser apuestaUser){
		repository.save(apuestaUser);
		
		return apuestaUser;
	}
	
	
	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<ApuestaUser> borrarApuestaUser(@PathVariable long id){
		if (repository.exists(id)){
			repository.delete(id);
			return new ResponseEntity<>(null, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	
}
