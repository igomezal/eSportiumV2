package es.urjc.code.daw.eSportium.ApuestaUser;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import es.urjc.code.daw.eSportium.apuesta.Apuesta;
import es.urjc.code.daw.eSportium.user.User;

public interface ApuestaUserRepository extends JpaRepository<ApuestaUser, Long> {

	List<ApuestaUser> findByUser(User u);
	
	List<ApuestaUser> findByApuesta(Apuesta a);
	
}
