package es.urjc.code.daw.eSportium.user;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonView;

import es.urjc.code.daw.eSportium.apuesta.Apuesta;

/**
 * This is the entity to store in database user information. It contains the
 * following basic information:
 * <ul>
 * <li>name: The name of the user. This name have to be used to logIn into the
 * service</li>
 * <li>passwordHash: The hash of the password. The password in never stored in
 * plain text to avoid information leak</li>
 * <li>roles: The roles of this user</li>
 * 
 * To check if a user can be logged into the service, this object is loaded from
 * database and password is verified. If user is authenticated, then this
 * database object is returned to the user.
 * 
 * NOTE: This class is intended to be extended by developer adding new
 * attributes. Current attributes can not be removed because they are used in
 * authentication procedures.
 */

@Entity
public class User {

	public interface BasicAtt{}
	public interface ApuestaAtt{}
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	@JsonView(BasicAtt.class)
	private String name;
	
	@JsonView(BasicAtt.class)
	private long karma;
	@JsonView(BasicAtt.class)
	private String fecha;
	@JsonView(BasicAtt.class)
	private String genero;
	@JsonView(BasicAtt.class)
	private String foto;
	@JsonView(BasicAtt.class)
	private String correo;
	
	private String estaeslacont;
	
	@JsonIgnore
	//@JsonView(BasicAtt.class)
	private String passwordHash;

	@ElementCollection(fetch = FetchType.EAGER)
	private List<String> roles;

	public User() {
	}

	public User(String name, String password,long karma, String... roles) {
		this.name = name;
		this.passwordHash = new BCryptPasswordEncoder().encode(password);
		this.roles = new ArrayList<>(Arrays.asList(roles));
		this.karma = karma;
	}

	public String getEstaeslacont() {
		return estaeslacont;
	}

	public void setEstaeslacont(String estaeslacont) {
		this.estaeslacont = estaeslacont;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPasswordHash() {
		return passwordHash;
	}

	public void setPasswordHash(String passwordHash) {
		this.passwordHash = passwordHash;
	}

	public List<String> getRoles() {
		return roles;
	}

	public void setRoles(List<String> roles) {
		this.roles = roles;
	}
	
	public long getKarma() {
		return karma;
	}

	public String getFecha() {
		return fecha;
	}

	public void setFecha(String fecha) {
		this.fecha = fecha;
	}

	public String getGenero() {
		return genero;
	}

	public void setGenero(String genero) {
		this.genero = genero;
	}

	public String getFoto() {
		return foto;
	}

	public void setFoto(String foto) {
		this.foto = foto;
	}

	public String getCorreo() {
		return correo;
	}

	public void setCorreo(String correo) {
		this.correo = correo;
	}

	public void setKarma(long karma) {
		this.karma = karma;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
	

}