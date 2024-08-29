---
title: 'Proyecto: Calculadora Básica (cont)'
description: 'Proyecto: Calculadora Básica (cont)'

date: '2024-08-28'
modified_date: '2024-08-28'
image: /assets/images/posts/random-img.jpg
---

### **Documentación: Día 5 - Proyecto: Calculadora Básica (Cont.)**

---

#### **1. Revisión y Mejora del Código**

Hoy continuaremos con el proyecto de la calculadora básica, centrándonos en mejorar el código, agregar nuevas funcionalidades y hacer que el programa sea más robusto y fácil de usar. Revisaremos el código existente para optimizarlo y lo expandiremos con nuevas características.

---

#### **2. Refactorización del Código**

**Refactorización** es el proceso de reescribir el código para que sea más limpio, eficiente y fácil de entender sin cambiar su funcionalidad básica.

**Separación del Código en Funciones**

En lugar de tener todo el código en un solo bloque, podemos dividirlo en funciones más pequeñas y específicas. Esto mejora la legibilidad y facilita el mantenimiento del código.

**Ejemplo de Refactorización:**
```python
def solicitar_numero(mensaje):
    """Solicita al usuario un número y lo convierte a float."""
    return float(input(mensaje))

def solicitar_operacion():
    """Solicita al usuario la operación deseada."""
    return input("Introduce la operación (+, -, *, /): ")

def realizar_operacion(num1, num2, operacion):
    """Realiza la operación según la elección del usuario."""
    if operacion == "+":
        return num1 + num2
    elif operacion == "-":
        return num1 - num2
    elif operacion == "*":
        return num1 * num2
    elif operacion == "/":
        if num2 != 0:
            return num1 / num2
        else:
            return "Error: División por cero no permitida."
    else:
        return "Operación no válida."

def mostrar_resultado(num1, num2, operacion, resultado):
    """Muestra el resultado al usuario."""
    print(f"El resultado de {num1} {operacion} {num2} es: {resultado}")
```

**Uso de las Funciones en el Programa Principal:**
```python
# Programa Principal
numero1 = solicitar_numero("Introduce el primer número: ")
numero2 = solicitar_numero("Introduce el segundo número: ")
operacion = solicitar_operacion()
resultado = realizar_operacion(numero1, numero2, operacion)
mostrar_resultado(numero1, numero2, operacion, resultado)
```

---

#### **3. Nuevas Funcionalidades**

**1. Soporte para Más Operaciones**

Podemos agregar soporte para operaciones adicionales como exponenciación (`**`) y módulo (`%`).

**Actualización de la Función `realizar_operacion`:**
```python
def realizar_operacion(num1, num2, operacion):
    if operacion == "+":
        return num1 + num2
    elif operacion == "-":
        return num1 - num2
    elif operacion == "*":
        return num1 * num2
    elif operacion == "/":
        if num2 != 0:
            return num1 / num2
        else:
            return "Error: División por cero no permitida."
    elif operacion == "**":
        return num1 ** num2
    elif operacion == "%":
        if num2 != 0:
            return num1 % num2
        else:
            return "Error: División por cero no permitida."
    else:
        return "Operación no válida."
```

**2. Repetir el Cálculo**

Permite al usuario realizar múltiples cálculos en una sola ejecución del programa, preguntándole después de cada operación si desea continuar.

**Ejemplo:**
```python
continuar = True

while continuar:
    numero1 = solicitar_numero("Introduce el primer número: ")
    numero2 = solicitar_numero("Introduce el segundo número: ")
    operacion = solicitar_operacion()
    resultado = realizar_operacion(numero1, numero2, operacion)
    mostrar_resultado(numero1, numero2, operacion, resultado)
    
    respuesta = input("¿Quieres realizar otra operación? (s/n): ").lower()
    if respuesta != 's':
        continuar = False
```

**3. Validación Mejorada**

Mejora la validación de entradas para asegurar que el usuario introduzca datos válidos.

**Ejemplo de Validación:**
```python
def solicitar_numero(mensaje):
    while True:
        try:
            return float(input(mensaje))
        except ValueError:
            print("Por favor, introduce un número válido.")
```

---

#### **4. Ejercicio Completo**

Aquí tienes el código completo de la calculadora mejorada:

```python
def solicitar_numero(mensaje):
    while True:
        try:
            return float(input(mensaje))
        except ValueError:
            print("Por favor, introduce un número válido.")

def solicitar_operacion():
    return input("Introduce la operación (+, -, *, /, **, %): ")

def realizar_operacion(num1, num2, operacion):
    if operacion == "+":
        return num1 + num2
    elif operacion == "-":
        return num1 - num2
    elif operacion == "*":
        return num1 * num2
    elif operacion == "/":
        if num2 != 0:
            return num1 / num2
        else:
            return "Error: División por cero no permitida."
    elif operacion == "**":
        return num1 ** num2
    elif operacion == "%":
        if num2 != 0:
            return num1 % num2
        else:
            return "Error: División por cero no permitida."
    else:
        return "Operación no válida."

def mostrar_resultado(num1, num2, operacion, resultado):
    print(f"El resultado de {num1} {operacion} {num2} es: {resultado}")

# Programa Principal
continuar = True

while continuar:
    numero1 = solicitar_numero("Introduce el primer número: ")
    numero2 = solicitar_numero("Introduce el segundo número: ")
    operacion = solicitar_operacion()
    resultado = realizar_operacion(numero1, numero2, operacion)
    mostrar_resultado(numero1, numero2, operacion, resultado)
    
    respuesta = input("¿Quieres realizar otra operación? (s/n): ").lower()
    if respuesta != 's':
        continuar = False
```

---

#### **5. Resumen del Proyecto**

Hoy has mejorado tu calculadora básica al refactorizar el código en funciones, agregar nuevas operaciones, implementar un ciclo para realizar múltiples cálculos, y mejorar la validación de entradas. Estas mejoras no solo hacen que el código sea más legible y fácil de mantener, sino que también hacen que el programa sea más robusto y flexible para el usuario.

**Tarea**: Continúa mejorando la calculadora agregando más características, como un historial de cálculos o la posibilidad de deshacer la última operación.