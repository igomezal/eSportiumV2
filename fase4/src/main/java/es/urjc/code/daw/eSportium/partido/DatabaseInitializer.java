package es.urjc.code.daw.eSportium.partido;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Controller;


import es.urjc.code.daw.eSportium.juego.*;
import es.urjc.code.daw.eSportium.jugador.*;
import es.urjc.code.daw.eSportium.user.User;
import es.urjc.code.daw.eSportium.user.UserRepository;
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
	private UserRepository userRepository;

	
	@Autowired
	private JugadorRepository jugadorRepository;
	
	@Override
	public void run(String... args) throws Exception {

		Juego j1 = new Juego("League of Legends","lol");
		
		Equipo equipo = new Equipo("Fnatic","http://stuffled.com/vector/wp-content/uploads/sites/5/2014/04/Fnatic-Logo-vector-image.png");
		Equipo equipo2 = new Equipo("X6","http://blog.socialnat.com/wp-content/uploads/2015/06/escudox6tence.png");
		
		Jugador jug1 = new Jugador("Rekkles","ADC",9);
		jug1.setEquipo(equipo);
		Jugador jug2 = new Jugador("Yellowstar","Support",8);
		jug2.setEquipo(equipo);
		
		Jugador jug3 = new Jugador("Pepito","ADC",9);
		jug3.setEquipo(equipo2);
		Jugador jug4 = new Jugador("JosueStar","Support",8);
		jug4.setEquipo(equipo2);
		
		List<Jugador> jugadores = new ArrayList<Jugador>();
		jugadores.add(jug1);
		jugadores.add(jug2);
		
		List<Jugador> jugadores2 = new ArrayList<Jugador>();
		jugadores2.add(jug3);
		jugadores2.add(jug4);
		
		equipo.setJuegadores(jugadores);
		equipo2.setJuegadores(jugadores2);
		equipoRepository.save(equipo);
		equipoRepository.save(equipo2);
		
		Partido p1 = new Partido("finalizado"," 400","eq1","https://www.youtube.com/embed/3EwuH3-xmds","BO5","30","70");
		p1.setEquipo1(equipo);
		p1.setEquipo2(equipo2);
		p1.setJuego(j1);
		Partido p2 = new Partido("finalizado"," 400","eq1","https://www.youtube.com/embed/3EwuH3-xmds","BO5","30","70");
		p2.setEquipo1(equipo);
		p2.setEquipo2(equipo2);
		p2.setJuego(j1);
		
		List<Partido> listaPartidos = new ArrayList<Partido>();
		listaPartidos.add(p1);
		listaPartidos.add(p2);
		
		j1.setPartidos(listaPartidos);
				
		juegoRepository.save(j1);
		
		
		
		// Sample users

		userRepository.save(new User("user", "pass",7400,  "ROLE_USER"));
		userRepository.save(new User("admin", "pass",10000, "ROLE_USER", "ROLE_ADMIN"));
	}

}
