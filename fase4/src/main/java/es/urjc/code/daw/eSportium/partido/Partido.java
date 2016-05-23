package es.urjc.code.daw.eSportium.partido;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonInclude;

import es.urjc.code.daw.eSportium.juego.Juego;

@Entity
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Partido{
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id = -1;
	
	private String estado;
	private String diferencia;
	private String ganando;
	private String url;
	private String rondas;
	
	@OneToOne
	private Juego juego;
	
	public Partido() {}
	
	public Partido(String estado, String diferencia, String ganando, String url, String rondas) {
		super();
		this.estado = estado;
		this.diferencia = diferencia;
		this.ganando = ganando;
		this.url = url;
		this.rondas = rondas;
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

	@Override
	public String toString() {
		return "Partido [id=" + id + ", estado=" + estado + ", diferencia=" + diferencia + ", ganando=" + ganando
				+ ", url=" + url + ", rondas=" + rondas + "]";
	}
	
	
}