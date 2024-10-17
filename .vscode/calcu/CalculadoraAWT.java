import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
public class CalculadoraAWT extends Frame implements ActionListener {
// Componentes
TextField pantalla;
Button[] botones;
String[] etiquetas = {"7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"};

// Constructor
public CalculadoraAWT() {
pantalla = new TextField();
pantalla.setEditable(false);
// Configurar el diseño de la calculadora
setLayout(new BorderLayout());
add(pantalla, BorderLayout.NORTH);
// Crear botones y agregarlos al diseño
Panel panelBotones = new Panel();
panelBotones.setLayout(new GridLayout(4, 4));
botones = new Button[etiquetas.length];
for (int i = 0; i < etiquetas.length; i++) {
botones[i] = new Button(etiquetas[i]);
botones[i].addActionListener(this);
panelBotones.add(botones[i]);
}
add(panelBotones, BorderLayout.CENTER);
// Configurar la ventana principal
setTitle("Calculadora AWT");
setSize(300, 400);
setLocationRelativeTo(null);
setVisible(true);
setResizable(false);
// Manejar el cierre de la ventana
addWindowListener(new java.awt.event.WindowAdapter() {
public void windowClosing(java.awt.event.WindowEvent windowEvent) {
System.exit(0);
}
});
}
// Método de manejo de eventos para los botones
public void actionPerformed(ActionEvent e) {
String comando = e.getActionCommand();
if (comando.equals("=")) {
// Realizar el cálculo y mostrar el resultado
String expresion = pantalla.getText();
try {
double resultado = evaluarExpresion(expresion);
pantalla.setText(Double.toString(resultado));
} catch (ArithmeticException ex) {
pantalla.setText("Error");
}
} else {
// Agregar el texto del botón a la pantalla
pantalla.setText(pantalla.getText() + comando);
}
}

// Método para evaluar la expresión matemática
private double evaluarExpresion(String expresion) {
// Este método puede mejorarse para manejar expresiones más complejas
return Double.parseDouble(expresion);
}
// Método principal
public static void main(String[] args) {
new CalculadoraAWT();
}
}