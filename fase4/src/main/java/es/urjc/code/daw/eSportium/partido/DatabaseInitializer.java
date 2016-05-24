package es.urjc.code.daw.eSportium.partido;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Controller;

import es.urjc.code.daw.eSportium.juego.*;

@Controller
public class DatabaseInitializer implements CommandLineRunner {

	@Autowired
	private JuegoRepository juegoRepository;
	
	@Autowired
	private PartidoRepository partidoRepository;
	
	@Override
	public void run(String... args) throws Exception {

		Juego j1 = new Juego("League of Legends","lol");
		
		Partido p1 = new Partido("finalizado"," 400","eq1","https://www.youtube.com/embed/3EwuH3-xmds","BO5");
		p1.setJuego(j1);
		Partido p2 = new Partido("finalizado"," 400","eq1","https://www.youtube.com/embed/3EwuH3-xmds","BO5");
		p2.setJuego(j1);
		
		List<Partido> listaPartidos = new ArrayList<Partido>();
		listaPartidos.add(p1);
		listaPartidos.add(p2);
		
		j1.setPartidos(listaPartidos);
		
		
		//partidoRepository.save(p1);
		//partidoRepository.save(p2);
		
		juegoRepository.save(j1);


	}

}
