---
title: 'Bucles `for` y `while`'
description: 'Bucles `for` y `while`'

date: '2024-08-28'
modified_date: '2024-08-28'
image: /assets/images/posts/random-img.jpg
---

### **Documentación: Día 9 - Bucles `for` y `while`**

---

#### **1. ¿Qué es un Bucle?**

Un bucle es una estructura de control que permite repetir un bloque de código múltiples veces. Los bucles son fundamentales en programación porque permiten automatizar tareas repetitivas y manejar grandes cantidades de datos de manera eficiente.

**Tipos de Bucles:**
- **`for`**: Se utiliza cuando se conoce de antemano el número de iteraciones.
- **`while`**: Se utiliza cuando el número de iteraciones depende de una condición que debe cumplirse.

---

#### **2. Bucle `for`**

El bucle `for` itera sobre una secuencia (como una lista, tupla, o rango) y ejecuta un bloque de código en cada iteración.

**Sintaxis:**
```python
for elemento in secuencia:
    # Código a ejecutar en cada iteración
```

**Ejemplo:**
```python
# Iterar sobre una lista de números
numeros = [1, 2, 3, 4, 5]
for numero in numeros:
    print(numero)
```
Este código imprimirá cada número en la lista `numeros`.

**Iterar sobre un rango de números:**
```python
# Imprimir los números del 0 al 4
for i in range(5):
    print(i)
```
El `range(5)` genera una secuencia de números del 0 al 4.

---

#### **3. Bucle `while`**

El bucle `while` repite un bloque de código mientras una condición sea verdadera. Se utiliza cuando no se sabe cuántas veces se debe repetir el bucle, pero se conoce una condición para detenerlo.

**Sintaxis:**
```python
while condición:
    # Código a ejecutar mientras la condición sea verdadera
```

**Ejemplo:**
```python
contador = 0
while contador < 5:
    print(contador)
    contador += 1
```
Este bucle imprimirá los números del 0 al 4, incrementando `contador` en cada iteración hasta que `contador` sea igual a 5.

---

#### **4. Control de Bucles: `break` y `continue`**

**`break`:**
- Se utiliza para terminar un bucle antes de que se cumpla la condición completa.
- Ideal cuando se ha encontrado la condición que se buscaba y no es necesario seguir iterando.

**Ejemplo:**
```python
for i in range(10):
    if i == 5:
        break
    print(i)
```
Este código imprimirá los números del 0 al 4 y luego terminará el bucle.

**`continue`:**
- Se utiliza para saltar la iteración actual y continuar con la siguiente.
- Útil para omitir ciertas iteraciones sin detener todo el bucle.

**Ejemplo:**
```python
for i in range(5):
    if i == 2:
        continue
    print(i)
```
Este código imprimirá 0, 1, 3 y 4, omitiendo el número 2.

---

#### **5. Bucle Anidado**

Un bucle anidado es un bucle dentro de otro bucle. Esto es útil cuando se trabaja con estructuras de datos multidimensionales como listas de listas.

**Ejemplo:**
```python
# Imprimir los elementos de una matriz 2x2
matriz = [[1, 2], [3, 4]]
for fila in matriz:
    for elemento in fila:
        print(elemento)
```
Este código imprimirá:
```
1
2
3
4
```

---

#### **6. Ejercicio Práctico**

**1. Escribe un programa que imprima los números del 1 al 10 utilizando un bucle `for`.**

**2. Crea un programa que use un bucle `while` para contar hacia atrás desde 10 hasta 1 y luego imprima "¡Despegue!".**

**3. Escribe un programa que recorra los números del 1 al 100 y, utilizando `continue`, imprima solo los números impares.**

**Ejemplo de Solución:**
```python
# 1. Bucle for para imprimir del 1 al 10
for i in range(1, 11):
    print(i)

# 2. Bucle while para contar hacia atrás
contador = 10
while contador > 0:
    print(contador)
    contador -= 1
print("¡Despegue!")

# 3. Bucle for con continue para imprimir números impares
for i in range(1, 101):
    if i % 2 == 0:
        continue
    print(i)
```

---

#### **7. Buenas Prácticas**

- **Evitar Bucle Infinito:** Asegúrate de que el bucle `while` tenga una condición que eventualmente se vuelva falsa.
- **Claridad en el Código:** Utiliza nombres de variables que reflejen su propósito dentro del bucle.
- **Uso Adecuado de `break` y `continue`:** Úsalos con moderación para no dificultar la lectura del código.

---

#### **8. Resumen**

Hoy has aprendido sobre los bucles `for` y `while`, cómo se utilizan para repetir bloques de código y cómo controlarlos con `break` y `continue`. También viste cómo los bucles anidados pueden ser útiles para trabajar con estructuras de datos más complejas.

**Tarea**: Crea un programa que utilice tanto bucles `for` como `while` para realizar una tarea específica en tu vida diaria, como calcular los ahorros mensuales o manejar una lista de tareas pendientes.