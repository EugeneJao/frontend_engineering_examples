package demo;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.velocity.Template;
import org.apache.velocity.VelocityContext;
import org.apache.velocity.app.Velocity;
import org.apache.velocity.app.VelocityEngine;

@WebServlet(name = "HelloServlet", urlPatterns = { "hello" }, loadOnStartup = 1)
public class HelloServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;
    VelocityEngine ve = null;


    private void processRequest(HttpServletRequest request, HttpServletResponse response) throws Exception {
        response.setContentType("text/html;charset=UTF-8");
        ve = new VelocityEngine();
        ve.setProperty(Velocity.RESOURCE_LOADER, "webapp");
        ve.setProperty("webapp.resource.loader.class", "org.apache.velocity.tools.view.WebappResourceLoader");
        ve.setProperty("webapp.resource.loader.path", "/vtl");
        ve.setProperty(Velocity.INPUT_ENCODING, "UTF-8");
        ve.setProperty(Velocity.OUTPUT_ENCODING, "UTF-8");
        ve.setApplicationAttribute("javax.servlet.ServletContext", request.getServletContext());
        ve.init();
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        Template tpl = null;
        try {
            processRequest(request, response);
            tpl = ve.getTemplate("demo.vm", "UTF-8");
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        VelocityContext context = new VelocityContext();
        context.put("name", "velocity");
        context.put("url", "/123131/123131");
        tpl.merge(context, response.getWriter());
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String name = request.getParameter("name");
        if (name == null)
            name = "World";
        request.setAttribute("user", name);
        request.getRequestDispatcher("response.jsp").forward(request, response);
    }
}