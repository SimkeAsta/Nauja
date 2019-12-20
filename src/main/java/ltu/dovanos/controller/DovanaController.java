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
import ltu.dovanos.services.DovanaService;

@RestController
@RequestMapping(value = "/api/dovanos")
public class DovanaController {

	@Autowired
	private DovanaService dovanaService;

	@RequestMapping(method = RequestMethod.GET)
//	@ApiOperation(value = "Get presents", notes="Returns all presents")
	public List<Dovana> getDovanos() {
		return dovanaService.getDovanos();
	}

	@RequestMapping(value = "/{title}", method = RequestMethod.GET)
	public Dovana getDovanaByTitle(String title) {
		return dovanaService.findDovanaByTitle(title);
	}

	@RequestMapping(method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
//	@ApiOperation(value = "Create new present", notes="Creates new present with data")
	public Dovana addDovana
	(
//			@ApiParam(value = "Present Data", required = true)
	@RequestBody final DovanaCommand cmd){
		return dovanaService.addDovana(cmd);
	}

	@RequestMapping(path = "/{title}", method = RequestMethod.DELETE)
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void deleteDovana(@PathVariable String title) {
		dovanaService.findDovanaByTitle(title);
		dovanaService.deleteByTitle(title);
	}

	@RequestMapping(path = "/{title}", method = RequestMethod.PUT)
	public Dovana updateDovanaByTitle(@PathVariable String title, @RequestBody final DovanaCommand cmd) {
		return dovanaService.updateDovana(title, cmd);
	}
}
