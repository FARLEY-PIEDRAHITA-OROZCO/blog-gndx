---
title: 'Entrada y Salida de Datos'
description: Entrada y Salida de Datos
date: '2024-08-28'
modified_date: '2024-08-28'
image: /assets/images/posts/random-img.jpg
---

### **Documentación: Día 3 - Entrada y Salida de Datos**

---

#### **1. Entrada de Datos**

La entrada de datos es el proceso mediante el cual un programa recibe información del usuario. Esto permite que el programa sea más dinámico y responda a las necesidades del usuario en tiempo real.

**Uso de la Función `input()`**

En muchos lenguajes de programación, como Python, la función `input()` se utiliza para capturar la entrada del usuario desde el teclado. Los datos introducidos por el usuario se almacenan en una variable.

**Ejemplo en Python:**
```python
nombre = input("¿Cuál es tu nombre? ")
print("Hola, " + nombre + "!")
```

**Explicación:**
- La función `input()` muestra un mensaje al usuario (en este caso, "¿Cuál es tu nombre? ") y espera a que el usuario introduzca un valor.
- El valor introducido se almacena en la variable `nombre`.
- Luego, `print()` se usa para mostrar un saludo utilizando el nombre proporcionado por el usuario.

**Convertir la Entrada de Datos:**

Por defecto, la función `input()` captura la entrada como una cadena de texto (string). Si necesitas un número, es importante convertir esa entrada al tipo de dato correcto.

**Ejemplo en Python:**
```python
edad = int(input("¿Cuántos años tienes? "))
print("Tendrás " + str(edad + 1) + " años el próximo año.")
```

**Explicación:**
- Usamos `int()` para convertir la entrada a un número entero.
- Luego, sumamos 1 a la edad y la mostramos.

---

#### **2. Salida de Datos**

La salida de datos es el proceso mediante el cual un programa muestra información al usuario. En la mayoría de los lenguajes de programación, la función más común para realizar esta operación es `print()`.

**Uso de la Función `print()`**

La función `print()` se utiliza para mostrar información en la pantalla.

**Ejemplo en Python:**
```python
nombre = "Juan"
print("Hola, " + nombre + "!")
```

**Formatos de Salida:**

A veces es útil dar formato a la salida para que sea más legible o para incluir variables en medio de una cadena de texto. Puedes hacer esto usando diferentes métodos.

**Ejemplo en Python:**
```python
nombre = "Juan"
edad = 30
print(f"Hola, {nombre}. Tienes {edad} años.")
```

**Explicación:**
- `f` antes de la cadena indica que es una f-string, lo que permite insertar variables directamente dentro de la cadena usando llaves `{}`.

---

#### **3. Ejemplo Completo**

**Crear un programa que:**
1. Solicite al usuario su nombre, edad y ciudad.
2. Use los datos para imprimir un mensaje personalizado.

**Ejemplo en Python:**
```python
# Entrada de datos
nombre = input("¿Cómo te llamas? ")
edad = int(input("¿Cuántos años tienes? "))
ciudad = input("¿En qué ciudad vives? ")

# Salida de datos
print(f"Hola, {nombre}. Tienes {edad} años y vives en {ciudad}.")
```

**Salida esperada:**
```
¿Cómo te llamas? Juan
¿Cuántos años tienes? 30
¿En qué ciudad vives? Madrid
Hola, Juan. Tienes 30 años y vives en Madrid.
```

---

#### **4. Buenas Prácticas**

- **Validación de la Entrada de Datos**: Siempre es una buena práctica validar la entrada del usuario para asegurarte de que se está proporcionando el tipo de dato esperado.
  ```python
  edad = input("Introduce tu edad: ")
  if edad.isdigit():
      edad = int(edad)
  else:
      print("Por favor, introduce un número válido.")
  ```
- **Comentarios**: Usa comentarios para explicar partes del código donde se realice entrada y salida de datos.
  ```python
  # Pedimos al usuario su nombre
  nombre = input("¿Cómo te llamas? ")
  ```

---

#### **5. Ejercicio Práctico**

**Crea un programa que:**
1. Pregunte al usuario por su nombre, edad, y comida favorita.
2. Imprima un mensaje personalizado usando la información proporcionada.

**Ejemplo:**
```python
nombre = input("¿Cómo te llamas? ")
edad = int(input("¿Cuántos años tienes? "))
comida_favorita = input("¿Cuál es tu comida favorita? ")

print(f"Hola, {nombre}. Tienes {edad} años y te gusta comer {comida_favorita}.")
```

---

### **Resumen**
Hoy aprendiste sobre la entrada y salida de datos, cómo capturar información del usuario usando `input()` y cómo mostrarla en pantalla con `print()`. También aprendiste a manejar y formatear datos de entrada para que tu programa interactúe mejor con el usuario.

**Tarea**: Practica creando un programa que pida al usuario varios datos y los utilice para generar una salida más compleja, como un pequeño cuestionario o una calculadora simple.