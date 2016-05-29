package es.urjc.code.daw.eSportium.jugador;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonView;

import es.urjc.code.daw.eSportium.equipo.Equipo;

@Entity
public class Jugador{
	
	public interface BasicAtt{}
	public interface EquipoAtt{}
	
	@JsonView(BasicAtt.class)
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	@JsonView(BasicAtt.class)
	private String nombre;
	
	@JsonView(BasicAtt.class)
	private String posicion;
	
	@JsonView(BasicAtt.class)
	private long media;
	
	@JsonView(EquipoAtt.class)
	@ManyToOne
	private Equipo equipo;

	public Jugador() {

	}

	public Jugador(String nombre, String posicion, long media) {
		super();
		this.nombre = nombre;
		this.posicion = posicion;
		this.media = media;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getPosicion() {
		return posicion;
	}
	
	public void setPosicion(String posicion){
		this.posicion = posicion;
	}

	public long getMedia() {
		return media;
	}

	public void setMedia(long media) {
		this.media = media;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}
	
	public Equipo getEquipo(){
		return this.equipo;
	}
	
	public void setEquipo(Equipo equipo){
		this.equipo = equipo;
	}
	
	

	@Override
	public String toString() {
		return "Jugador [id=" + id + ",nombre=" + nombre + ", posicion=" + posicion + ", media=" + media + "]";
	}

}
