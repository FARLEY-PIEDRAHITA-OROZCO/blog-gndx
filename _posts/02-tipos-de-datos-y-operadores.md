---
title: 'Tipos de Datos y Operadores'
description: 'Tipos de Datos y Operadores'
date: '2024-08-28'
modified_date: '2024-08-28'
image: /assets/images/posts/random-img.jpg
---

### **Documentación: Día 2 - Tipos de Datos y Operadores**

---

#### **1. Tipos de Datos**

En programación, los datos pueden clasificarse en diferentes tipos. Es importante conocerlos para saber cómo manipularlos y qué operaciones pueden realizarse sobre ellos.

**Principales Tipos de Datos:**

1. **Enteros (int)**:
   - Representan números enteros, sin parte decimal.
   - Ejemplos: `42`, `-10`, `0`.

2. **Flotantes (float)**:
   - Representan números con parte decimal.
   - Ejemplos: `3.14`, `-0.99`, `2.718`.

3. **Cadenas de Texto (string)**:
   - Representan una secuencia de caracteres, encerrada entre comillas simples (`'`) o dobles (`"`).
   - Ejemplos: `"Hola, Mundo"`, `'Python'`.

4. **Booleanos (bool)**:
   - Representan valores de verdad: `True` (verdadero) o `False` (falso).
   - Ejemplos: `True`, `False`.

5. **Listas (list)**:
   - Representan una colección de elementos ordenados que pueden ser de diferentes tipos de datos.
   - Ejemplos: `[1, 2, 3]`, `["manzana", "banana", "cereza"]`.

**Ejemplo en Python:**
```python
entero = 10
flotante = 3.14
cadena = "Hola"
booleano = True
lista = [1, 2, 3, "Python"]
```

---

#### **2. Operadores en Programación**

Los operadores son símbolos que permiten realizar operaciones sobre uno o más operandos (variables o valores). A continuación, se describen los operadores más comunes:

**1. Operadores Aritméticos:**
   - **Suma (`+`)**: Suma dos valores.
     - Ejemplo: `5 + 3` resulta en `8`.
   - **Resta (`-`)**: Resta un valor de otro.
     - Ejemplo: `5 - 3` resulta en `2`.
   - **Multiplicación (`*`)**: Multiplica dos valores.
     - Ejemplo: `5 * 3` resulta en `15`.
   - **División (`/`)**: Divide un valor por otro.
     - Ejemplo: `10 / 2` resulta en `5.0`.
   - **Módulo (`%`)**: Devuelve el residuo de la división de dos valores.
     - Ejemplo: `10 % 3` resulta en `1`.
   - **Exponente (`**`)**: Eleva un número a la potencia de otro.
     - Ejemplo: `2 ** 3` resulta en `8`.

**2. Operadores de Comparación:**
   - **Igual a (`==`)**: Compara si dos valores son iguales.
     - Ejemplo: `5 == 5` resulta en `True`.
   - **Diferente de (`!=`)**: Compara si dos valores son diferentes.
     - Ejemplo: `5 != 3` resulta en `True`.
   - **Mayor que (`>`)**: Comprueba si un valor es mayor que otro.
     - Ejemplo: `5 > 3` resulta en `True`.
   - **Menor que (`<`)**: Comprueba si un valor es menor que otro.
     - Ejemplo: `3 < 5` resulta en `True`.
   - **Mayor o igual que (`>=`)**: Comprueba si un valor es mayor o igual a otro.
     - Ejemplo: `5 >= 5` resulta en `True`.
   - **Menor o igual que (`<=`)**: Comprueba si un valor es menor o igual a otro.
     - Ejemplo: `3 <= 5` resulta en `True`.

**3. Operadores Lógicos:**
   - **AND (`and`)**: Devuelve `True` si ambas condiciones son verdaderas.
     - Ejemplo: `(5 > 3) and (8 > 5)` resulta en `True`.
   - **OR (`or`)**: Devuelve `True` si al menos una condición es verdadera.
     - Ejemplo: `(5 > 3) or (3 > 8)` resulta en `True`.
   - **NOT (`not`)**: Invierte el valor de verdad.
     - Ejemplo: `not(5 > 3)` resulta en `False`.

---

#### **3. Operadores de Asignación**

Los operadores de asignación se usan para asignar valores a las variables.

**Operadores más comunes:**
   - **Asignación Simple (`=`)**: Asigna un valor a una variable.
     - Ejemplo: `x = 5`.
   - **Asignación con Suma (`+=`)**: Suma y asigna el resultado a la variable.
     - Ejemplo: `x += 3` es equivalente a `x = x + 3`.
   - **Asignación con Resta (`-=`)**: Resta y asigna el resultado a la variable.
     - Ejemplo: `x -= 2` es equivalente a `x = x - 2`.
   - **Asignación con Multiplicación (`*=`)**: Multiplica y asigna el resultado a la variable.
     - Ejemplo: `x *= 3` es equivalente a `x = x * 3`.
   - **Asignación con División (`/=`)**: Divide y asigna el resultado a la variable.
     - Ejemplo: `x /= 2` es equivalente a `x = x / 2`.

---

#### **4. Buenas Prácticas**

- **Comentarios**: Usa comentarios para describir las operaciones que realizas, especialmente si no son obvias.
  ```python
  # Sumar dos números
  suma = 10 + 20
  ```
- **Espacios en blanco**: Deja espacios alrededor de los operadores para mejorar la legibilidad.
  ```python
  x = 10 + 5   # Más legible
  ```

---

#### **5. Ejercicio Práctico**

**Crea un programa simple que:**
1. Declare variables de diferentes tipos (entero, flotante, cadena, booleano, lista).
2. Realice operaciones aritméticas con números enteros y flotantes.
3. Use operadores de comparación para comparar valores.
4. Use operadores lógicos para combinar condiciones.

**Ejemplo:**
```python
# Declaración de variables
entero = 10
flotante = 3.5
cadena = "Programación"
booleano = True
lista = [1, 2, 3]

# Operaciones aritméticas
suma = entero + 5
division = flotante / 2

# Operadores de comparación
es_igual = (entero == 10)
es_mayor = (flotante > 2)

# Operadores lógicos
resultado_logico = (es_igual and es_mayor)

# Imprimir resultados
print("Suma:", suma)
print("División:", division)
print("Es igual:", es_igual)
print("Es mayor:", es_mayor)
print("Resultado lógico:", resultado_logico)
```

**Salida esperada:**
```
Suma: 15
División: 1.75
Es igual: True
Es mayor: True
Resultado lógico: True
```

---

### **Resumen**
Hoy aprendiste sobre los diferentes tipos de datos y operadores en programación. Practicaste cómo usarlos para realizar cálculos, comparaciones y evaluaciones lógicas en un programa simple.

**Tarea**: Crea un nuevo programa que utilice una combinación de operadores aritméticos, de comparación y lógicos para resolver un problema cotidiano.
