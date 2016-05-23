package es.urjc.code.daw.eSportium.partido;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Controller;


import es.urjc.code.daw.eSportium.juego.*;
import es.urjc.code.daw.eSportium.jugador.*;
import es.urjc.code.daw.eSportium.equipo.*;

@Controller
public class DatabaseInitializer implements CommandLineRunner {

	@Autowired
	private PartidoRepository partidoRepository;
	
	@Autowired
	private JuegoRepository juegoRepository;

	@Autowired
	private EquipoRepository equipoRepository;
	
	@Autowired
	private JugadorRepository jugadorRepository;
	
	@Override
	public void run(String... args) throws Exception {

		Juego j1 = new Juego("League of Legends","lol");
		juegoRepository.save(j1);
		
		Partido p1 = new Partido("finalizado",
				" 400","eq1","https://www.youtube.com/embed/3EwuH3-xmds","BO5");
		//p1.setJuego(j1);
		partidoRepository.save(p1);
		
		Equipo equipo = new Equipo("Fnatic","http://stuffled.com/vector/wp-content/uploads/sites/5/2014/04/Fnatic-Logo-vector-image.png");
		equipoRepository.save(equipo);
		
		Jugador jug1 = new Jugador("Rekkles","ADC",9);
		Jugador jug2 = new Jugador("Yellowstar","Support",8);
		jug1.setEquipo(equipo);
		jug2.setEquipo(equipo);
		
		jugadorRepository.save(jug1);
		jugadorRepository.save(jug2);		

	}

}
