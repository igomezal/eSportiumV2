package es.urjc.code.daw.eSportium.equipo;

import java.util.ArrayList;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;


import com.fasterxml.jackson.annotation.JsonInclude;

import java.util.*;
import es.urjc.code.daw.eSportium.jugador.Jugador;

@Entity
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Equipo{
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id = -1;
	
	private String nombre;
	private String logo;
	
	
	@OneToMany
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

	public void setJuegadores(ArrayList<Jugador> jugadores) {
		this.jugadores = jugadores;
	}

	@Override
	public String toString() {
		return "Jugador [id=" + id + ", nombre=" + nombre + ", logo=" + logo + "]";
	}
	
	
}