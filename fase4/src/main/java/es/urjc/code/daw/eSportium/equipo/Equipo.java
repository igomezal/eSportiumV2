package es.urjc.code.daw.eSportium.equipo;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonView;

import java.util.*;
import es.urjc.code.daw.eSportium.jugador.Jugador;

@Entity
public class Equipo{
	public interface BasicAtt{}
	public interface JugadoresAtt{}
	
	@JsonView(BasicAtt.class)
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	@JsonView(BasicAtt.class)
	private String nombre;
	
	@JsonView(BasicAtt.class)
	private String logo;
	
	@JsonView(JugadoresAtt.class)
	@OneToMany(cascade=CascadeType.ALL,mappedBy="equipo",fetch = FetchType.EAGER)
	private List<Jugador> jugadores;
	
	public Equipo() {}
	
	public Equipo(String nombre, String logo) {
		super();
		this.nombre = nombre;
		this.logo = logo;
		this.jugadores = new ArrayList<Jugador>();
		
	}
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getNombre() {
		return nombre;
	}
	public void setEstado(String nombre) {
		this.nombre = nombre;
	}
	public String getLogo() {
		return logo;
	}
	public void setLogo(String logo) {
		this.logo = logo;
	}
	
	public List<Jugador> getJuegadores() {
		return this.jugadores;
	}

	public void setJuegadores(List<Jugador> jugadores) {
		this.jugadores = jugadores;
	}

	@Override
	public String toString() {
		return "Jugador [id=" + id + ", nombre=" + nombre + ", logo=" + logo + "]";
	}
	
	
}