---
title: 'Introducción a Condicionales'
description: 'Introducción a Condicionales'

date: '2024-08-28'
modified_date: '2024-08-28'
image: /assets/images/posts/random-img.jpg
---

### **Documentación: Día 8 - Introducción a Condicionales**

---

#### **1. ¿Qué son las Condicionales?**

Las condicionales son estructuras de control en programación que permiten ejecutar diferentes bloques de código según se cumpla o no una determinada condición. Esto permite que el programa tome decisiones y actúe de manera dinámica dependiendo de los datos o situaciones que se presenten.

**Importancia de las Condicionales:**
- **Toma de Decisiones:** Permiten que el programa decida qué acciones tomar en base a ciertas condiciones.
- **Control de Flujo:** Facilitan el control del flujo de ejecución del programa, haciéndolo más flexible y adaptable.
- **Versatilidad:** Son esenciales para construir lógica compleja en los programas.

---

#### **2. La Estructura `if`**

La estructura `if` es la base de las condicionales. Evalúa una condición y, si esa condición es verdadera, ejecuta un bloque de código.

**Sintaxis:**
```python
if condición:
    # Código a ejecutar si la condición es verdadera
```

**Ejemplo:**
```python
edad = 18

if edad >= 18:
    print("Eres mayor de edad.")
```
En este ejemplo, si la variable `edad` es 18 o más, se imprime "Eres mayor de edad."

---

#### **3. La Estructura `else`**

El bloque `else` acompaña a una estructura `if` para manejar el caso en que la condición sea falsa.

**Sintaxis:**
```python
if condición:
    # Código a ejecutar si la condición es verdadera
else:
    # Código a ejecutar si la condición es falsa
```

**Ejemplo:**
```python
edad = 16

if edad >= 18:
    print("Eres mayor de edad.")
else:
    print("Eres menor de edad.")
```
Si la condición `edad >= 18` es falsa, se ejecuta el código bajo `else`, imprimiendo "Eres menor de edad."

---

#### **4. La Estructura `elif`**

El bloque `elif` (abreviatura de "else if") permite verificar múltiples condiciones de forma secuencial. Es útil cuando hay más de dos posibles resultados.

**Sintaxis:**
```python
if condición1:
    # Código a ejecutar si condición1 es verdadera
elif condición2:
    # Código a ejecutar si condición2 es verdadera
else:
    # Código a ejecutar si ninguna de las condiciones anteriores es verdadera
```

**Ejemplo:**
```python
nota = 75

if nota >= 90:
    print("Excelente")
elif nota >= 75:
    print("Aprobado")
else:
    print("Reprobado")
```
Aquí, si la `nota` es mayor o igual a 90, se imprime "Excelente". Si no, pero la `nota` es mayor o igual a 75, se imprime "Aprobado". Si ninguna condición se cumple, se imprime "Reprobado."

---

#### **5. Operadores de Comparación**

Las condicionales dependen de las comparaciones para decidir qué bloque de código ejecutar. Los operadores de comparación más comunes son:

- **Igual a (`==`)**: Verifica si dos valores son iguales.
- **Diferente de (`!=`)**: Verifica si dos valores son diferentes.
- **Mayor que (`>`)**: Verifica si un valor es mayor que otro.
- **Menor que (`<`)**: Verifica si un valor es menor que otro.
- **Mayor o igual que (`>=`)**: Verifica si un valor es mayor o igual a otro.
- **Menor o igual que (`<=`)**: Verifica si un valor es menor o igual a otro.

**Ejemplo:**
```python
a = 10
b = 20

if a == b:
    print("a es igual a b")
elif a > b:
    print("a es mayor que b")
else:
    print("a es menor que b")
```

---

#### **6. Operadores Lógicos**

Los operadores lógicos permiten combinar múltiples condiciones dentro de una misma condicional.

- **AND (`and`)**: Evalúa si ambas condiciones son verdaderas.
- **OR (`or`)**: Evalúa si al menos una de las condiciones es verdadera.
- **NOT (`not`)**: Invierte el valor de la condición (verdadero a falso o viceversa).

**Ejemplo:**
```python
edad = 20
es_estudiante = True

if edad >= 18 and es_estudiante:
    print("Eres un adulto estudiante.")
```
En este caso, el mensaje se imprimirá solo si `edad >= 18` y `es_estudiante` son verdaderos.

---

#### **7. Ejercicio Práctico**

**1. Crea un programa que solicite al usuario su edad y luego:**
   - Si la edad es menor de 12, imprime "Eres un niño".
   - Si la edad es entre 12 y 18, imprime "Eres un adolescente".
   - Si la edad es entre 19 y 65, imprime "Eres un adulto".
   - Si la edad es mayor de 65, imprime "Eres un adulto mayor".

**2. Mejora el programa para que considere si el usuario es estudiante (pidiendo esta información al usuario) y agregue esa condición en la salida.**

**Ejemplo:**
```python
edad = int(input("Ingresa tu edad: "))
es_estudiante = input("¿Eres estudiante? (si/no): ")

if edad < 12:
    print("Eres un niño")
elif edad <= 18:
    print("Eres un adolescente")
elif edad <= 65:
    if es_estudiante == "si":
        print("Eres un adulto estudiante")
    else:
        print("Eres un adulto")
else:
    print("Eres un adulto mayor")
```

---

#### **8. Buenas Prácticas**

- **Clareza en las Condiciones**: Asegúrate de que tus condiciones sean claras y no ambiguas.
- **Uso de Comentarios**: Añade comentarios para explicar el propósito de cada condicional, especialmente si es compleja.
- **Evitar Redundancias**: Si tienes múltiples condiciones similares, intenta simplificarlas o agruparlas.

---

#### **9. Resumen**

Hoy has aprendido sobre las estructuras condicionales, su importancia y cómo utilizarlas para controlar el flujo de un programa en Python. Has visto cómo usar `if`, `else`, y `elif` para tomar decisiones basadas en condiciones, y cómo los operadores de comparación y lógicos pueden ayudarte a construir estas condiciones.

**Tarea**: Implementa un programa que use condicionales para manejar diferentes situaciones de la vida diaria, como determinar qué ropa ponerse en función del clima y la temperatura.