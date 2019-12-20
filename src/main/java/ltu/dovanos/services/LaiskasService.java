package ltu.dovanos.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import ltu.dovanos.entities.Laiskas;
import ltu.dovanos.entities.LaiskasCommand;
import ltu.dovanos.repositories.LaiskasRepository;

@Service
public class LaiskasService {
	
	@Autowired
	LaiskasRepository laiskasRepository;
	
	@Transactional
	public List<Laiskas> getLaiskai() {
		return laiskasRepository.findAll();
	}

	@Transactional
	public void deleteById(Long id) {
		laiskasRepository.deleteById(id);
	}

	public Laiskas updateLaiskas(Long id, LaiskasCommand cmd) {
		Laiskas existingLetter = findLaiskasById(id);
		existingLetter.setId(null);
		existingLetter.setName(cmd.getName());
		existingLetter.setSurname(cmd.getSurname());
		existingLetter.setCity(cmd.getCity());
		existingLetter.setCountry(cmd.getCountry());
		existingLetter.setStreet(cmd.getStreet());
		existingLetter.setHouseNumber(cmd.getHouseNumber());
		return existingLetter;
	}

	public Laiskas findLaiskasById(Long id) {
		return laiskasRepository.findLaiskasById(id);
	}
	
	@Transactional
	public Laiskas addLaiskas(LaiskasCommand cmd) {
		Laiskas letter = new Laiskas(null, cmd.getName(), cmd.getSurname(), cmd.getCity(), cmd.getCountry(), cmd.getStreet(), cmd.getHouseNumber());
		return laiskasRepository.save(letter);
	}

}
