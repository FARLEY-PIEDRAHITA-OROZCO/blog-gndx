---
title: 'Introducción a la Programación y Variables'
description: 'Documentación: Día 1 - Introducción a la Programación y Variables'

date: '2024-08-28'
modified_date: '2024-08-28'
image: /assets/images/posts/random-img.jpg
---

### **Documentación: Día 1 - Introducción a la Programación y Variables**

---

#### **1. Introducción a la Programación**

**¿Qué es la Programación?**
La programación es el proceso de crear un conjunto de instrucciones que le dicen a una computadora cómo realizar una tarea. Estos conjuntos de instrucciones son llamados programas, y los programas son creados usando lenguajes de programación.

**Lenguajes de Programación**
Un lenguaje de programación es un sistema de comunicación con una computadora. Existen diversos lenguajes como Python, JavaScript, C++, entre otros, y cada uno tiene su propia sintaxis y reglas.

**¿Por qué es importante aprender a programar?**
- **Automatización**: Permite automatizar tareas repetitivas.
- **Resolución de Problemas**: Fomenta el pensamiento lógico y la resolución de problemas.
- **Innovación**: Es la base para el desarrollo de nuevas tecnologías.

---

#### **2. Variables en Programación**

**¿Qué es una Variable?**
Una variable es un espacio en la memoria de la computadora donde se almacena un valor que puede cambiar durante la ejecución del programa. Las variables son fundamentales en programación ya que permiten almacenar y manipular datos.

**Declaración y Asignación**
- **Declarar una variable**: Es decirle a la computadora que reserve un espacio en memoria para almacenar un valor.
- **Asignar un valor a una variable**: Es colocar un valor específico en esa memoria reservada.

**Ejemplo en Pseudocódigo:**
```
var edad = 25
```
En este ejemplo, `edad` es una variable que almacena el valor `25`.

**Tipos de Variables**
Las variables pueden almacenar diferentes tipos de datos. Los tipos más comunes incluyen:
- **Números enteros (int)**: Ejemplo: 5, -10, 42
- **Números decimales (float)**: Ejemplo: 3.14, -0.99, 2.718
- **Cadenas de texto (string)**: Ejemplo: "Hola, Mundo", "Python"
- **Booleanos (bool)**: Verdadero o Falso (true o false)

**Convenciones para Nombres de Variables**
- **Nombres descriptivos**: El nombre de la variable debe reflejar su propósito. Ejemplo: `nombreUsuario`, `totalCompra`.
- **Sin espacios**: Usa guiones bajos o mayúsculas para separar palabras. Ejemplo: `nombre_usuario` o `nombreUsuario`.
- **Evitar palabras reservadas**: No uses palabras reservadas del lenguaje de programación (como `for`, `if`, `while`).

**Ejemplo de Declaración y Asignación en Python:**
```python
nombre = "Juan"
edad = 30
altura = 1.75
es_mayor_de_edad = True
```

---

#### **3. Operaciones Básicas con Variables**

**Operaciones Matemáticas**
Puedes realizar operaciones matemáticas básicas con variables numéricas:
```python
a = 10
b = 5
suma = a + b       # 15
resta = a - b      # 5
multiplicacion = a * b  # 50
division = a / b   # 2.0
```

**Concatenación de Cadenas**
Puedes unir (concatenar) cadenas de texto usando el operador `+`:
```python
saludo = "Hola, " + "Mundo!"   # "Hola, Mundo!"
```

**Operadores de Asignación**
Puedes combinar la asignación con operaciones matemáticas:
```python
x = 10
x += 5   # Es equivalente a x = x + 5, ahora x es 15
```

---

#### **4. Buenas Prácticas**

- **Comentarios**: Usa comentarios para describir lo que hacen tus variables o partes del código.
  ```python
  # Esta variable almacena la edad del usuario
  edad = 25
  ```
- **Nombres Claros**: Usa nombres de variables que reflejen el propósito del dato que almacenan.

---

#### **5. Ejercicio Práctico**

**Crea un programa simple que:**
1. Declare variables para almacenar tu nombre, edad y altura.
2. Asigne valores a estas variables.
3. Imprima un mensaje que use estas variables para mostrar una breve descripción tuya.

**Ejemplo:**
```python
nombre = "Juan"
edad = 30
altura = 1.75

print("Me llamo " + nombre + ", tengo " + str(edad) + " años y mido " + str(altura) + " metros.")
```

**Salida esperada:**
```
Me llamo Juan, tengo 30 años y mido 1.75 metros.
```

---

### **Resumen**
Hoy aprendiste qué es la programación, la importancia de las variables y cómo se utilizan en un programa. Además, has practicado la creación y manipulación de variables, y cómo se pueden aplicar en un pequeño programa.

**Tarea**: Repasa los conceptos y crea un nuevo programa que utilice diferentes tipos de variables para describir algo de tu vida diaria.