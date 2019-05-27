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
public class CategoryHelper {

    Session session = null;

    public CategoryHelper() {
        this.session = HibernateUtil.getSessionFactory().getCurrentSession();
    }
    
    public void openSession() {
        if (session == null || !session.isOpen()) {
            session = HibernateUtil.getSessionFactory().getCurrentSession();
        }
    }

    public void closeSession() {
        if (session.isOpen()) {
            session.close();
        }
    }

    public List getCategorys(int startID, int endID) {
        openSession();
        List<Category> categoryList = null;
        org.hibernate.Transaction tx = session.beginTransaction();
        try {
            Query q = session.createQuery("from Category as category where category.categoryId between '" + startID + "' and '" + endID + "'");
            categoryList = (List<Category>) q.list();
            tx.commit();
        } catch (Exception e) {
            tx.rollback();
            e.printStackTrace();
        } finally {
             // session.clear();
        }
        return categoryList;
    }


    public Category getCatByID(int catId) {
        openSession();
        Category category = null;
        org.hibernate.Transaction tx = session.beginTransaction();
        
        try {
            Query q = session.createQuery("from Category as category where category.category_id=" + catId);
            category = (Category) q.uniqueResult();
        } catch (Exception e) {
            tx.rollback();
            e.printStackTrace();
        } finally {
             // session.clear();
        }

        return category;
    }
    
    public void salvar(Category category) {
        openSession();
        org.hibernate.Transaction tx = session.beginTransaction();
        try {
            session.save(category);
            tx.commit();
        } catch (RuntimeException ex) {
            if (tx != null) {
                tx.rollback();
            }
            throw ex;
        } 
        finally {
            closeSession();
        }
    }
}
