/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dvdrental;

import javax.inject.Named;
import javax.enterprise.context.SessionScoped;
import java.io.Serializable;
import java.util.Date;
import java.util.List;
import javax.faces.context.FacesContext;
import javax.faces.model.DataModel;
import javax.faces.model.ListDataModel;

/**
 *
 * @author luiz
 */
@Named(value = "categoryController")
@SessionScoped
public class CategoryController implements Serializable {

    int startId;
    int endId;
    DataModel categoryTitles;
    CategoryHelper helper;
    private int recordCount = 1000;
    private int pageSize = 10;
    private Category current;
    
    private Category category;
    private int selectedItemIndex;

    /**
     * Creates a new instance of FilmController
     */
    public CategoryController() {
        helper = new CategoryHelper();
        startId = 1;
        endId = 10;
    }

    public CategoryController(int startId, int endId) {
        helper = new CategoryHelper();
        this.startId = startId;
        this.endId = endId;
    }

    public Category getSelected() {
        if (current == null) {
            current = new Category();
            selectedItemIndex = -1;
        }
        return current;
    }

    public DataModel getCategoryTitles() {
        if (categoryTitles == null) {
            categoryTitles = new ListDataModel(helper.getCategorys(startId, endId));
        }
        return categoryTitles;
    }

    void recreateModel() {
        categoryTitles = null;
    }

    public boolean isHasNextPage() {
        if (endId + pageSize <= recordCount) {
            return true;
        }
        return false;
    }

    public boolean isHasPreviousPage() {
        if (startId - pageSize > 0) {
            return true;
        }
        return false;
    }

    public String next() {
        startId = endId + 1;
        endId = endId + pageSize;
        recreateModel();
        return "index";
    }

    public String previous() {
        startId = startId - pageSize;
        endId = endId - pageSize;
        recreateModel();
        return "index";
    }

    public int getPageSize() {
        return pageSize;
    }

    /*public String prepareView() {
        current = (Film) getFilmTitles().getRowData();
        return "browse";
    }*/

    public String prepareList() {
        recreateModel();
        return "index";
    }

    /*public String getLanguage() {
        // int langID = current.getLanguageByLanguageId().getLanguageId().intValue();
        int langID = current.getLanguage().getLanguageId();
        String language = helper.getLangByID(langID);
        return language;
    }*/

    /*public String getActors() {
        List<Actor> actors = helper.getActorsByID(current.getFilmId());
        StringBuffer totalCast = new StringBuffer();
        for (int i = 0; i < actors.size(); i++) {
            Actor actor = (Actor) actors.get(i);
            totalCast.append(actor.getFirstName());
            totalCast.append(" ");
            totalCast.append(actor.getLastName());
            totalCast.append("  ");
        }
        return totalCast.toString();
    }*/

    /*public String getCategory() {
        Category category = helper.getCategoryByID(current.getFilmId());
        return category.getName();
    }*/
    
    public Category getCategory() {
        if (category == null) {
            category = new Category();
        }
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public void salvar() {

        try {
            CategoryHelper categoryHelper = new CategoryHelper();
            category.setLastUpdate(new Date());
            categoryHelper.salvar(category);

            category = new Category();

            MensagemUtil.addMsgInfo("Categoria salva com sucesso");
        } catch (RuntimeException ex) {
            MensagemUtil.addMsgErro("Erro ao tentar cadastrar Category: " + ex.getMessage());
        }
    }
    
    public void excluir() {
        try {
            CategoryHelper categoryHelper = new CategoryHelper();
            categoryHelper.excluir(category);
            MensagemUtil.addMsgInfo("Categoria excluida com sucesso");
        } catch (RuntimeException ex) {
            MensagemUtil.addMsgErro("Erro ao tentar excluir Category: " + ex.getMessage());
        }
    }
    
    public void atualizar(){
        try {
            CategoryHelper categoryHelper = new CategoryHelper();
            categoryHelper.atualizar(category);
            MensagemUtil.addMsgInfo("Categoria atualizada com sucesso");
        } catch (RuntimeException ex) {
            MensagemUtil.addMsgErro("Erro ao tentar atualizar Category: " + ex.getMessage());
        }
        
    }
}
