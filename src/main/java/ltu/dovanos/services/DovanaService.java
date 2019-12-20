package ltu.dovanos.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import ltu.dovanos.entities.Dovana;
import ltu.dovanos.entities.DovanaCommand;
import ltu.dovanos.repositories.DovanaRepository;

@Service
public class DovanaService {

	@Autowired
	DovanaRepository dovanaRepository;

	@Transactional
	public List<Dovana> getDovanos() {
		return dovanaRepository.findAll();
	}

	@Transactional
	public Dovana findDovanaByTitle(String title) {
		return dovanaRepository.findDovanaByTitle(title);
	}

	@Transactional
	public Dovana addDovana(DovanaCommand cmd) {
		Dovana present = new Dovana(null, cmd.getTitle(), cmd.getImage(), cmd.getDescription(), cmd.getKidsPresent());
		return dovanaRepository.save(present);
	}

	@Transactional
	public void deleteByTitle(String title) {
		dovanaRepository.deleteByTitle(title);
	}

	public Dovana updateDovana(String title, DovanaCommand cmd) {
		Dovana existingPresent = findDovanaByTitle(title);
		existingPresent.setId(null);
		existingPresent.setTitle(cmd.getTitle());
		existingPresent.setDescription(cmd.getDescription());
		existingPresent.setImage(cmd.getImage());
		existingPresent.setKidsPresent(cmd.getKidsPresent());
		return existingPresent;
	}

}
