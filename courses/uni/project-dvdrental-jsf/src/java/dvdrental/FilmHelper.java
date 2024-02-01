/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dvdrental;

import java.util.List;
import org.hibernate.Query;
import org.hibernate.Session;

/**
 *
 * @author luiz
 */
public class FilmHelper {

    Session session = null;

    public FilmHelper() {
        this.session = HibernateUtil.getSessionFactory().getCurrentSession();
    }
    
    private void openSession() {
        if (!session.isOpen()) {
            session = HibernateUtil.getSessionFactory().openSession();
        }
    }

    public List getFilmTitles(int startID, int endID) {
        openSession();
        List<Film> filmList = null;
        org.hibernate.Transaction tx = session.beginTransaction();
        try {
            Query q = session.createQuery("from Film as film where film.filmId between '" + startID + "' and '" + endID + "'");
            filmList = (List<Film>) q.list();
            tx.commit();
        } catch (Exception e) {
            tx.rollback();
            e.printStackTrace();
        } finally {
             // session.clear();
        }
        return filmList;
    }

    public List getActorsByID(int filmId) {
        openSession();
        List<Actor> actorList = null;
        org.hibernate.Transaction tx = session.beginTransaction();
        try {
            Query q = session.createQuery("from Actor as actor where actor.actorId in (select filmActor.actor.actorId from FilmActor as filmActor where filmActor.film.filmId='" + filmId + "')");
            actorList = (List<Actor>) q.list();
        } catch (Exception e) {
            tx.rollback();
            e.printStackTrace();
        } finally {
             // session.clear();
        }

        return actorList;
    }

    public Category getCategoryByID(int filmId) {
        openSession();
        List<Category> categoryList = null;
        org.hibernate.Transaction tx = session.beginTransaction();
        try {
            Query q = session.createQuery("from Category as category where category.categoryId in (select filmCat.category.categoryId from FilmCategory as filmCat where filmCat.film.filmId='" + filmId + "')");
            categoryList = (List<Category>) q.list();
        } catch (Exception e) {
            tx.rollback();
            e.printStackTrace();
        } finally {
             // session.clear();
        }

        return categoryList.get(0);
    }

    public Film getFilmByID(int filmId) {
        openSession();
        Film film = null;
        org.hibernate.Transaction tx = session.beginTransaction();
        
        try {
            Query q = session.createQuery("from Film as film where film.filmId=" + filmId);
            film = (Film) q.uniqueResult();
        } catch (Exception e) {
            tx.rollback();
            e.printStackTrace();
        } finally {
             // session.clear();
        }

        return film;
    }

    public String getLangByID(int langId) {
        openSession();
        Language language = null;
        org.hibernate.Transaction tx = session.beginTransaction();
        try {    
            Query q = session.createQuery("from Language as lang where lang.languageId=" + langId);
            language = (Language) q.uniqueResult();
        } catch (Exception e) {
            tx.rollback();
            e.printStackTrace();
        } finally {
             // session.clear();
        }

        return language.getName();
    }
}
