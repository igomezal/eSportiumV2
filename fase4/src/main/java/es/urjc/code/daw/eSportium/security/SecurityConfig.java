package es.urjc.code.daw.eSportium.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

/**
 * Security configuration. In this class can be configured several aspects
 * related to security:
 * <ul>
 * <li>Security behavior: Login method, session management, CSRF, etc..</li>
 * <li>Authentication provider: Responsible to authenticate users. In this
 * example, we use an instance of UserRepositoryAuthProvider, that authenticate
 * users stored in a Spring Data database.</li>
 * <li>URL Access Authorization: Access to http URLs depending on Authenticated
 * vs anonymous users and also based on user role.</li>
 * </ul>
 * 
 * NOTE: The only part of this class intended for app developer customization is
 * the method <code>configureUrlAuthorization</code>. App developer should
 * decide what URLs are accessible by what user role.
 */
@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {

	@Autowired
	public UserRepositoryAuthProvider userRepoAuthProvider;

	@Override
	protected void configure(HttpSecurity http) throws Exception {

		configureUrlAuthorization(http);

		// Disable CSRF protection (it is difficult to implement with ng2)
		http.csrf().disable();

		// Use Http Basic Authentication
		http.httpBasic();

		// Do not redirect when logout
		http.logout().logoutSuccessHandler((rq, rs, a) -> {
		});
	}

	private void configureUrlAuthorization(HttpSecurity http) throws Exception {

		// APP: This rules have to be changed by app developer

		// URLs that need authentication to access to it
		http.authorizeRequests().antMatchers(HttpMethod.POST, "/books/**").hasRole("USER");
		http.authorizeRequests().antMatchers(HttpMethod.PUT, "/books/**").hasRole("USER");
		//Admin
		http.authorizeRequests().antMatchers(HttpMethod.GET, "/admin").hasRole("ADMIN");
		http.authorizeRequests().antMatchers(HttpMethod.GET, "/addJuego").hasRole("ADMIN");
		http.authorizeRequests().antMatchers(HttpMethod.POST, "/addJuego").hasRole("ADMIN");
		http.authorizeRequests().antMatchers(HttpMethod.GET, "/addPartido").hasRole("ADMIN");
		http.authorizeRequests().antMatchers(HttpMethod.POST, "/addPartido").hasRole("ADMIN");
		http.authorizeRequests().antMatchers(HttpMethod.GET, "/ajustes").hasRole("ADMIN");
		http.authorizeRequests().antMatchers(HttpMethod.GET, "/editJuego/**").hasRole("ADMIN");
		http.authorizeRequests().antMatchers(HttpMethod.PUT, "/editJuego/**").hasRole("ADMIN");
		http.authorizeRequests().antMatchers(HttpMethod.DELETE, "/editJuego/**").hasRole("ADMIN");
		http.authorizeRequests().antMatchers(HttpMethod.GET, "/editPartido/**").hasRole("ADMIN");
		http.authorizeRequests().antMatchers(HttpMethod.PUT, "/editPartido/**").hasRole("ADMIN");
		http.authorizeRequests().antMatchers(HttpMethod.DELETE, "/editPartido/**").hasRole("ADMIN");
		http.authorizeRequests().antMatchers(HttpMethod.PUT, "/usuarios/doAdmin/**").hasRole("ADMIN");
		http.authorizeRequests().antMatchers(HttpMethod.PUT, "/usuarios/actKarma/**").hasRole("ADMIN");
		//http.authorizeRequests().antMatchers(HttpMethod.GET, "/juegos").hasRole("ADMIN");
		http.authorizeRequests().antMatchers(HttpMethod.DELETE, "/juegos").hasRole("ADMIN");
		//http.authorizeRequests().antMatchers(HttpMethod.GET, "/partidos").hasRole("ADMIN");
		http.authorizeRequests().antMatchers(HttpMethod.DELETE, "/partidos").hasRole("ADMIN");
		//http.authorizeRequests().antMatchers(HttpMethod.GET, "/usuarios").hasRole("ADMIN");
		http.authorizeRequests().antMatchers(HttpMethod.DELETE, "/usuarios").hasRole("ADMIN");
		http.authorizeRequests().antMatchers(HttpMethod.GET, "/editUsuario/**").hasRole("ADMIN");
		http.authorizeRequests().antMatchers(HttpMethod.PUT, "/editUsuario/**").hasRole("ADMIN");
		http.authorizeRequests().antMatchers(HttpMethod.PUT, "/usuarios/karmanuevo/").hasRole("ADMIN");
		http.authorizeRequests().antMatchers(HttpMethod.DELETE, "/editUsuario/**").hasRole("ADMIN");
		
		
		http.authorizeRequests().antMatchers(HttpMethod.PUT, "/equipos/**").hasRole("ADMIN");
		http.authorizeRequests().antMatchers(HttpMethod.POST, "/equipos/").hasRole("ADMIN");
		http.authorizeRequests().antMatchers(HttpMethod.DELETE, "/equipos/**").hasRole("ADMIN");
		
		http.authorizeRequests().antMatchers(HttpMethod.PUT, "/jugadores/**").hasRole("ADMIN");
		http.authorizeRequests().antMatchers(HttpMethod.POST, "/jugadores/").hasRole("ADMIN");
		http.authorizeRequests().antMatchers(HttpMethod.DELETE, "/jugadores/**").hasRole("ADMIN");
		
		http.authorizeRequests().antMatchers(HttpMethod.PUT, "/juegos/**").hasRole("ADMIN");
		http.authorizeRequests().antMatchers(HttpMethod.POST, "/juegos/").hasRole("ADMIN");
		http.authorizeRequests().antMatchers(HttpMethod.DELETE, "/juegos/**").hasRole("ADMIN");
		
		http.authorizeRequests().antMatchers(HttpMethod.PUT, "/apuestaUser/**").hasRole("ADMIN");
		http.authorizeRequests().antMatchers(HttpMethod.POST, "/apuestaUser/").hasRole("USER");
		
		http.authorizeRequests().antMatchers(HttpMethod.PUT, "/apuestas/**").hasRole("ADMIN");
		http.authorizeRequests().antMatchers(HttpMethod.POST, "/apuestas/").hasRole("USER");
		http.authorizeRequests().antMatchers(HttpMethod.DELETE, "/apuestas/**").hasRole("ADMIN");


		// Other URLs can be accessed without authentication
		http.authorizeRequests().anyRequest().permitAll();
	}

	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {

		// Database authentication provider
		auth.authenticationProvider(userRepoAuthProvider);
	}
}