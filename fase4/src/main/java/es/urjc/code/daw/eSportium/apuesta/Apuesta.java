package es.urjc.code.daw.eSportium.apuesta;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonView;

import es.urjc.code.daw.eSportium.user.User;
import es.urjc.code.daw.eSportium.partido.Partido;
import es.urjc.code.daw.eSportium.equipo.Equipo;

@Entity
public class Apuesta{
	
	public interface BasicAtt{}
	public interface UserAtt{}
	public interface PartidoAtt{}
	public interface EquipoAtt{}
	
	@JsonView(BasicAtt.class)
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	@JsonView(UserAtt.class)
	@ManyToOne
	private User usuario;
	
	@JsonView(PartidoAtt.class)
	@ManyToOne
	private Partido partido;
	
	@JsonView(EquipoAtt.class)
	@OneToOne
	private Equipo equipo;
	
	@JsonView(BasicAtt.class)
	private int karma;
	
	public Apuesta() {}
	
	public Apuesta(int karma){
		super();
		this.karma = karma;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public Equipo getEquipo() {
		return equipo;
	}

	public void setEquipo(Equipo equipo) {
		this.equipo = equipo;
	}

	public User getUsuario() {
		return usuario;
	}

	public void setUsuario(User usuario) {
		this.usuario = usuario;
	}

	public Partido getPartido() {
		return partido;
	}

	public void setPartido(Partido partido) {
		this.partido = partido;
	}

	public int getKarma() {
		return karma;
	}

	public void setKarma(int karma) {
		this.karma = karma;
	}

	@Override
	public String toString() {
		return "Apuesta [id=" + id + ", karma=" + karma + ", partido=" + partido + ", usuario=" + usuario
				 + "]";
	}
	
	
	
}