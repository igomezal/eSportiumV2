package es.urjc.code.daw.eSportium.partido;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.Hibernate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Controller;


import es.urjc.code.daw.eSportium.juego.*;
import es.urjc.code.daw.eSportium.jugador.*;
import es.urjc.code.daw.eSportium.user.User;
import es.urjc.code.daw.eSportium.user.UserRepository;
import es.urjc.code.daw.eSportium.equipo.*;
import es.urjc.code.daw.eSportium.ApuestaUser.ApuestaUser;
import es.urjc.code.daw.eSportium.ApuestaUser.ApuestaUserRepository;
import es.urjc.code.daw.eSportium.apuesta.*;

@Controller
public class DatabaseInitializer implements CommandLineRunner {
	
	@Autowired
	private ApuestaUserRepository apuestauserRepository;
	
	@Autowired
	private JuegoRepository juegoRepository;

	@Autowired
	private EquipoRepository equipoRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private ApuestaRepository apuestaRepository;
		
	@Override
	public void run(String... args) throws Exception {

		/*Juego j1 = new Juego("League of Legends","lol");
		Juego j2 = new Juego("Counter Strike","cs");
		Juego j3 = new Juego("Call of Duty: BO", "cod");
		
		Equipo equipo = new Equipo("Fnatic","image-Fnatic.jpg");
		Equipo equipo2 = new Equipo("X6","image-x6.jpg");
		Equipo equipo3 = new Equipo("Cloud9","image-Cloud9.jpg");
		Equipo equipo4 = new Equipo("Giants", "image-Giants.jpg");
		Equipo equipo5 = new Equipo("Origen", "image-Origen.jpg");
		Equipo equipo6 = new Equipo("Navi", "image-Navi.jpg");
		
		Jugador jug1 = new Jugador("Rekkles","ADC",9);
		jug1.setEquipo(equipo);
		Jugador jug2 = new Jugador("Yellowstar","Support",8);
		jug2.setEquipo(equipo);
		
		Jugador jug3 = new Jugador("Pepito","ADC",9);
		jug3.setEquipo(equipo2);
		Jugador jug4 = new Jugador("JosueStar","Support",8);
		jug4.setEquipo(equipo2);
		
		Jugador jug5 = new Jugador("ErMashoArfa","Lurker", 7);
		jug5.setEquipo(equipo3);
		Jugador jug6 = new Jugador("MiniMax","IA",3);
		jug6.setEquipo(equipo3);
		Jugador jug7 = new Jugador("Euler","AWP",8);
		jug7.setEquipo(equipo3);
		
		Jugador jug8 = new Jugador("Felipin","Top", 6);
		jug8.setEquipo(equipo4);
		Jugador jug9 = new Jugador("Kelvin","AWP",9);
		jug9.setEquipo(equipo4);
		Jugador jug10 = new Jugador("Celsius","Entry",8);
		jug10.setEquipo(equipo4);
		
		Jugador jug11 = new Jugador("Xpeke","ADC",10);
		jug11.setEquipo(equipo5);
		Jugador jug12 = new Jugador("Train","Jungle",8);
		jug12.setEquipo(equipo5);
		
		List<Jugador> jugadores = new ArrayList<Jugador>();
		jugadores.add(jug1);
		jugadores.add(jug2);
		
		List<Jugador> jugadores2 = new ArrayList<Jugador>();
		jugadores2.add(jug3);
		jugadores2.add(jug4);
		
		List<Jugador> jugadores3 = new ArrayList<Jugador>();
		jugadores3.add(jug5);
		jugadores3.add(jug6);
		jugadores3.add(jug7);
		
		List<Jugador> jugadores4 = new ArrayList<Jugador>();
		jugadores4.add(jug8);
		jugadores4.add(jug9);
		jugadores4.add(jug10);
		
		List<Jugador> jugadores5 = new ArrayList<Jugador>();
		jugadores5.add(jug11);
		jugadores5.add(jug12);
		
		equipo.setJugadores(jugadores);
		equipo2.setJugadores(jugadores2);
		equipo3.setJugadores(jugadores3);
		equipo4.setJugadores(jugadores4);
		equipo5.setJugadores(jugadores5);
		equipoRepository.save(equipo);
		equipoRepository.save(equipo2);
		equipoRepository.save(equipo3);
		equipoRepository.save(equipo4);
		equipoRepository.save(equipo5);
		
		Partido p1 = new Partido("Directo"," 100","eq1","https://www.youtube.com/embed/3EwuH3-xmds","BO5","30","70");
		p1.setEquipo1(equipo);
		p1.setEquipo2(equipo2);
		p1.setJuego(j1);
		Partido p2 = new Partido("Proximamente"," 200","eq1","https://www.youtube.com/embed/3EwuH3-xmds","BO5","30","70");
		p2.setEquipo1(equipo3);
		p2.setEquipo2(equipo4);
		p2.setJuego(j1);
		Partido p3 = new Partido("Directo"," 210","eq2","https://www.youtube.com/embed/A4ORZdLk6_A","BO3","30","70");
		p3.setEquipo1(equipo4);
		p3.setEquipo2(equipo2);
		p3.setJuego(j2);
		Partido p4 = new Partido("Proximamente"," 60","eq1","https://www.youtube.com/embed/A4ORZdLk6_A","BO1","30","70");
		p4.setEquipo1(equipo5);
		p4.setEquipo2(equipo3);
		p4.setJuego(j2);
		Partido p5 = new Partido("Finalizado","10","eq2","https://www.youtube.com/watch?v=lBHho8r_9k8","BO5","30","70");
		p5.setEquipo1(equipo3);
		p5.setEquipo2(equipo2);
		p5.setJuego(j3);
		Partido p6 = new Partido("Directo","10","eq1","https://www.youtube.com/watch?v=lBHho8r_9k8","BO3","30","70");
		p6.setEquipo1(equipo);
		p6.setEquipo2(equipo4);
		p6.setJuego(j3);
		
		List<Partido> listaPartidos = new ArrayList<Partido>();
		listaPartidos.add(p1);
		listaPartidos.add(p2);
		List<Partido> listaPartidos2 = new ArrayList<Partido>();
		listaPartidos2.add(p3);
		listaPartidos2.add(p4);
		List<Partido> listaPartidos3 = new ArrayList<Partido>();
		listaPartidos3.add(p5);
		listaPartidos3.add(p6);
		
		j1.setPartidos(listaPartidos);
		j2.setPartidos(listaPartidos2);
		j3.setPartidos(listaPartidos3);
				
		juegoRepository.save(j1);
		juegoRepository.save(j2);
		juegoRepository.save(j3);
		
		
		
		// Sample users


		//Apuestas
		Apuesta a1 = new Apuesta(300);
		a1.setPartido(p1);
		a1.setEquipo(p1.getEquipo1());
		
		User user1 = new User("user", "pass",7400,  "ROLE_USER");
		user1.setFoto("image-userN.jpg");
		User user2 = new User("admin", "pass",10000, "ROLE_USER", "ROLE_ADMIN");
		
		apuestaRepository.save(a1);
			
		userRepository.save(user1);
		userRepository.save(user2);
		
		ApuestaUser au1 = new ApuestaUser(a1, user1);
		
		apuestauserRepository.save(au1);*/
			
	
	}

}
