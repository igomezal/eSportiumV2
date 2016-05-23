package es.urjc.code.daw.eSportium.partido;

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
		juegoRepository.save(j1);
		
		Partido p1 = new Partido("finalizado"," 400","eq1","https://www.youtube.com/embed/3EwuH3-xmds","BO5");
		p1.setJuego(j1);
		Partido p2 = new Partido("finalizado"," 400","eq1","https://www.youtube.com/embed/3EwuH3-xmds","BO5");
		p2.setJuego(j1);
		
		partidoRepository.save(p1);
		partidoRepository.save(p2);

	}

}
