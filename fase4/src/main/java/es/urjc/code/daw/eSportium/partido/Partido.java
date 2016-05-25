package es.urjc.code.daw.eSportium.partido;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonView;

import es.urjc.code.daw.eSportium.equipo.Equipo;
import es.urjc.code.daw.eSportium.juego.Juego;
import es.urjc.code.daw.eSportium.apuesta.Apuesta;

@Entity
public class Partido{
	
	public interface BasicAtt{}
	public interface JuegoAtt{}
	public interface ApuestaAtt{}
	
	@JsonView(BasicAtt.class)
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	@JsonView(BasicAtt.class)
	private String estado;
	
	@JsonView(BasicAtt.class)
	private String diferencia;
	
	@JsonView(BasicAtt.class)
	private String ganando;
	
	@JsonView(BasicAtt.class)
	private String url;
	
	@JsonView(BasicAtt.class)
	private String rondas;
	
	@JsonView(BasicAtt.class)
	private String porcEq1;
	
	@JsonView(BasicAtt.class)
	private String porcEq2;
	
	@JsonView(JuegoAtt.class)
	@JsonBackReference
	@ManyToOne(fetch = FetchType.EAGER)
	private Juego juego;
	
	@JsonView(BasicAtt.class)
	@OneToOne
	private Equipo equipo1;
	
	@JsonView(BasicAtt.class)
	@OneToOne
	private Equipo equipo2;
	
	@JsonView(ApuestaAtt.class)
	@JsonBackReference
	@OneToMany(mappedBy="partido",fetch = FetchType.EAGER)
	private List<Apuesta> apuestas;
	
	public Partido() {}
	
	public Partido(String estado, String diferencia, String ganando, String url, String rondas, String porcEq1, String porcEq2) {
		super();
		this.estado = estado;
		this.diferencia = diferencia;
		this.ganando = ganando;
		this.url = url;
		this.rondas = rondas;
		this.porcEq1 = porcEq1;
		this.porcEq2 = porcEq2;
		this.apuestas = new ArrayList<Apuesta>();
	}
	
	public Equipo getEquipo1() {
		return equipo1;
	}

	public void setEquipo1(Equipo equipo1) {
		this.equipo1 = equipo1;
	}

	public List<Apuesta> getApuestas() {
		return apuestas;
	}

	public void setApuestas(List<Apuesta> apuestas) {
		this.apuestas = apuestas;
	}

	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getEstado() {
		return estado;
	}
	public void setEstado(String estado) {
		this.estado = estado;
	}
	public String getDiferencia() {
		return diferencia;
	}
	public void setDiferencia(String diferencia) {
		this.diferencia = diferencia;
	}
	public String getGanando() {
		return ganando;
	}
	public void setGanando(String ganando) {
		this.ganando = ganando;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public String getRondas() {
		return rondas;
	}
	public void setRondas(String rondas) {
		this.rondas = rondas;
	}
	
	public Juego getJuego() {
		return juego;
	}

	public void setJuego(Juego juego) {
		this.juego = juego;
	}
	
	

	public Equipo getEquipo2() {
		return equipo2;
	}

	public void setEquipo2(Equipo equipo2) {
		this.equipo2 = equipo2;
	}

	public String getPorcEq1() {
		return porcEq1;
	}

	public void setPorcEq1(String porcEq1) {
		this.porcEq1 = porcEq1;
	}

	public String getPorcEq2() {
		return porcEq2;
	}

	public void setPorcEq2(String porcEq2) {
		this.porcEq2 = porcEq2;
	}

	@Override
	public String toString() {
		return "Partido [id=" + id + ", estado=" + estado + ", diferencia=" + diferencia + ", ganando=" + ganando
				+ ", url=" + url + ", rondas=" + rondas + ", porcEq1=" + porcEq1 + ", porcEq2=" + porcEq2 + ", juego="
				+ juego + "]";
	}
	
	
	
}