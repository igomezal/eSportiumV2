package es.urjc.code.daw.eSportium.ApuestaUser;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonView;

import es.urjc.code.daw.eSportium.apuesta.Apuesta;
import es.urjc.code.daw.eSportium.user.User;

@Entity
public class ApuestaUser {
	
	public interface BasicAtt{}
	
	@JsonView(BasicAtt.class)
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	@JsonView(BasicAtt.class)
	@OneToOne
	private Apuesta apuesta;
	
	@JsonView(BasicAtt.class)
	@OneToOne
	private User user;
	
	public ApuestaUser(){};
	
	public ApuestaUser (Apuesta apuesta, User user){
		this.apuesta = apuesta;
		this.user = user;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public Apuesta getApuesta() {
		return apuesta;
	}

	public void setApuesta(Apuesta apuesta) {
		this.apuesta = apuesta;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	

}
