---
title: 'Proyecto: Calculadora Básica'
description: 'Proyecto: Calculadora Básica'

date: '2024-08-28'
modified_date: '2024-08-28'
image: /assets/images/posts/random-img.jpg
---

### **Documentación: Día 4 - Proyecto: Calculadora Básica**

---

#### **1. Introducción al Proyecto**

Hoy desarrollarás un proyecto práctico que consolidará los conocimientos adquiridos en los días anteriores. Crearás una calculadora básica que podrá realizar operaciones matemáticas simples como suma, resta, multiplicación y división. Este proyecto te ayudará a reforzar el manejo de variables, operadores, y la interacción con el usuario mediante la entrada y salida de datos.

---

#### **2. Requisitos del Proyecto**

La calculadora debe cumplir con los siguientes requisitos:

1. **Interacción con el Usuario**:
   - Solicitar al usuario dos números.
   - Preguntar al usuario qué operación desea realizar (suma, resta, multiplicación, división).

2. **Realización de la Operación**:
   - Según la elección del usuario, realizar la operación matemática correspondiente.
   - Mostrar el resultado al usuario.

3. **Validaciones**:
   - Asegurarse de que el usuario introduce números válidos.
   - Manejar la división entre cero, mostrando un mensaje de error adecuado si ocurre.

---

#### **3. Estructura del Programa**

El programa seguirá una estructura básica:

1. **Entrada de Datos**:
   - Capturar los dos números.
   - Capturar la operación deseada.

2. **Proceso**:
   - Realizar la operación matemática según la elección del usuario.

3. **Salida de Datos**:
   - Mostrar el resultado al usuario.

---

#### **4. Implementación Paso a Paso**

**Paso 1: Solicitar los Números al Usuario**
```python
# Solicitar el primer número
numero1 = float(input("Introduce el primer número: "))

# Solicitar el segundo número
numero2 = float(input("Introduce el segundo número: "))
```

**Paso 2: Solicitar la Operación**
```python
# Solicitar la operación que el usuario desea realizar
operacion = input("Introduce la operación (+, -, *, /): ")
```

**Paso 3: Realizar la Operación**
```python
# Realizar la operación según la elección del usuario
if operacion == "+":
    resultado = numero1 + numero2
elif operacion == "-":
    resultado = numero1 - numero2
elif operacion == "*":
    resultado = numero1 * numero2
elif operacion == "/":
    # Manejo de la división por cero
    if numero2 != 0:
        resultado = numero1 / numero2
    else:
        resultado = "Error: División por cero no permitida."
else:
    resultado = "Operación no válida."
```

**Paso 4: Mostrar el Resultado**
```python
# Mostrar el resultado al usuario
print(f"El resultado de {numero1} {operacion} {numero2} es: {resultado}")
```

---

#### **5. Buenas Prácticas**

- **Comentarios**: Agrega comentarios en tu código para explicar cada parte.
  ```python
  # Verificamos si la operación es suma
  if operacion == "+":
      resultado = numero1 + numero2
  ```

- **Manejo de Errores**: Implementa validaciones para manejar posibles errores, como la división por cero o entradas no válidas.

---

#### **6. Ejercicio Completo**

Aquí tienes el código completo de la calculadora:

```python
# Entrada de Datos
numero1 = float(input("Introduce el primer número: "))
numero2 = float(input("Introduce el segundo número: "))
operacion = input("Introduce la operación (+, -, *, /): ")

# Proceso
if operacion == "+":
    resultado = numero1 + numero2
elif operacion == "-":
    resultado = numero1 - numero2
elif operacion == "*":
    resultado = numero1 * numero2
elif operacion == "/":
    if numero2 != 0:
        resultado = numero1 / numero2
    else:
        resultado = "Error: División por cero no permitida."
else:
    resultado = "Operación no válida."

# Salida de Datos
print(f"El resultado de {numero1} {operacion} {numero2} es: {resultado}")
```

---

#### **7. Extensión del Proyecto**

- **Agrega más Operaciones**: Incluye otras operaciones como exponente (`**`) o módulo (`%`).
- **Repetición**: Permite que el usuario realice múltiples cálculos sin reiniciar el programa.
- **Historial**: Guarda los resultados de las operaciones realizadas y permite al usuario ver un historial.

---

### **Resumen**
Hoy has creado una calculadora básica, aplicando tus conocimientos sobre variables, operadores, y manejo de la entrada y salida de datos. Este proyecto te permite ver cómo se combinan diferentes conceptos para crear un programa funcional y útil.

**Tarea**: Mejora tu calculadora agregando nuevas características y asegúrate de entender cada parte del código. ¡Experimenta y diviértete!