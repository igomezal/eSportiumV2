package es.urjc.code.daw.eSportium.ApuestaUser;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import es.urjc.code.daw.eSportium.apuesta.Apuesta;

public interface ApuestaUserRepository extends JpaRepository<ApuestaUser, Long> {

	List<ApuestaUser> findByUser(long id);
	
	List<ApuestaUser> findByApuesta(Apuesta a);
	
}
