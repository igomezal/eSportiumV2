package es.urjc.code.daw.eSportium.juego;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Juego{
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id = -1;
	
	private String nombre;
	private String siglas;
	
	public Juego() {}
	
	public Juego(String nombre, String siglas) {
		super();
		this.nombre = nombre;
		this.siglas = siglas;
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

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	
	

	public String getSiglas() {
		return siglas;
	}

	public void setSiglas(String siglas) {
		this.siglas = siglas;
	}

	@Override
	public String toString() {
		return "Juego [id=" + id + ", nombre=" + nombre + "]";
	}
		
	
}