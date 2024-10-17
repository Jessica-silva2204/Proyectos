import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/calculateSqrt")
public class SqrtServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String numberStr = request.getParameter("number");
        double number = Double.parseDouble(numberStr);
        double sqrt = Math.sqrt(number);
        
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
        out.println("<html><body>");
        out.println("<h2>La raíz cuadrada de " + number + " es: " + sqrt + "</h2>");
        out.println("<a href='index.html'>Volver</a>");
        out.println("</body></html>");
    }
}