package ltu.dovanos.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import ltu.dovanos.entities.Dovana;
import ltu.dovanos.entities.DovanaCommand;
import ltu.dovanos.entities.Laiskas;
import ltu.dovanos.entities.LaiskasCommand;
import ltu.dovanos.services.LaiskasService;

@RestController
@RequestMapping(value = "/api/laiskai")
public class LaiskasController {

	@Autowired
	private LaiskasService laiskasService;

	@RequestMapping(method = RequestMethod.GET)
//	@ApiOperation(value = "Get letters", notes="Returns all letters")
	public List<Laiskas> getLaiskai() {
		return laiskasService.getLaiskai();
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public Laiskas getLaiskasById(Long id) {
		return laiskasService.findLaiskasById(id);
	}

	@RequestMapping(path = "/{id}", method = RequestMethod.DELETE)
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void deleteLaiskas(@PathVariable Long id) {
		laiskasService.findLaiskasById(id);
		laiskasService.deleteById(id);
	}

	@RequestMapping(path = "/{id}", method = RequestMethod.PUT)
	public Laiskas updateLaiskas(@PathVariable Long id, @RequestBody final LaiskasCommand cmd) {
		return laiskasService.updateLaiskas(id, cmd);
	}
	
	@RequestMapping(method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
//	@ApiOperation(value = "Create new letter", notes="Creates new letter with data")
	public Laiskas addLaiskas
	(
//			@ApiParam(value = "Letter Data", required = true)
	@RequestBody final LaiskasCommand cmd){
		return laiskasService.addLaiskas(cmd);
	}
}
