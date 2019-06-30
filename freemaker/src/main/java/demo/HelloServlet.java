package demo;
import java.io.File;
import java.io.IOException;
import java.io.OutputStreamWriter;
import java.io.Writer;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.ServletConfig;
import freemarker.template.Configuration;
import freemarker.template.Template;
import freemarker.template.TemplateException;
import freemarker.template.TemplateExceptionHandler;

@WebServlet(name = "HelloServlet", urlPatterns = { "hello" }, loadOnStartup = 1)
public class HelloServlet extends HttpServlet {
    Configuration cfg = new Configuration();

    public void init(ServletConfig config) throws ServletException {
        cfg.setDefaultEncoding("UTF-8");
        cfg.setTemplateExceptionHandler(TemplateExceptionHandler.RETHROW_HANDLER);
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        cfg.setServletContextForTemplateLoading(request.getSession().getServletContext(), "/ftl");
        Template demo = cfg.getTemplate("demo.ftl");
        Product product = new Product("/131231/1231", "hahha");
        Writer out = new OutputStreamWriter(response.getOutputStream());
        try {
            demo.process(product, out);
        } catch (TemplateException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
        throws ServletException, IOException {
        String name = request.getParameter("name");
        if (name == null) name = "World";
        request.setAttribute("user", name);
        request.getRequestDispatcher("response.jsp").forward(request, response); 
    }
}