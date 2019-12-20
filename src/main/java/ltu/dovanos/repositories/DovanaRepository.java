package ltu.dovanos.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import ltu.dovanos.entities.Dovana;

public interface DovanaRepository extends JpaRepository<Dovana, Long> {

	Dovana findDovanaByTitle(String title);

	void deleteByTitle(String title);

}
