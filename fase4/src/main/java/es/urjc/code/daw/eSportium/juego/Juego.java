package es.urjc.code.daw.eSportium.juego;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonView;

import es.urjc.code.daw.eSportium.partido.Partido;

@Entity
public class Juego{
	
	public interface BasicAtt{}
	public interface PartidosAtt{}
	
	@JsonView(BasicAtt.class)
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	@JsonView(BasicAtt.class)
	private String nombre;
	
	@JsonView(BasicAtt.class)
	private String siglas;
	
	@JsonView(PartidosAtt.class)
	@JsonManagedReference
	@OneToMany(cascade=CascadeType.ALL,mappedBy="juego", fetch = FetchType.EAGER)
	private List<Partido> partidos;
	
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

	
	public List<Partido> getPartidos() {
		return partidos;
	}

	public void setPartidos(List<Partido> partidos) {
		this.partidos = partidos;
	}

	@Override
	public String toString() {
		return "Juego [id=" + id + ", nombre=" + nombre + "]";
	}
		
	
}