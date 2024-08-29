---
title: 'Validaciones y Correcciones'
description: 'Validaciones y Correcciones'

date: '2024-08-28'
modified_date: '2024-08-28'
image: /assets/images/posts/random-img.jpg
---

### **Documentación: Día 6 - Validaciones y Correcciones**

---

#### **1. Importancia de la Validación de Datos**

La validación de datos es crucial en la programación para asegurar que el programa funcione correctamente y no falle ante entradas inesperadas. Esto es especialmente importante cuando los datos provienen de usuarios, quienes podrían cometer errores al ingresar información.

**¿Por qué es importante validar los datos?**
- **Prevención de Errores**: Evita que el programa falle debido a datos incorrectos.
- **Seguridad**: Protege contra posibles ataques (como inyecciones de código).
- **Experiencia de Usuario**: Mejora la usabilidad del programa al guiar al usuario para que introduzca datos válidos.

---

#### **2. Tipos Comunes de Validaciones**

**1. Validación de Tipo de Dato**

Verifica que la entrada del usuario sea del tipo de dato esperado (por ejemplo, un número, una cadena de texto, etc.).

**Ejemplo en Python:**
```python
def solicitar_numero(mensaje):
    while True:
        try:
            return float(input(mensaje))
        except ValueError:
            print("Por favor, introduce un número válido.")
```

**2. Validación de Rango**

Asegura que un valor numérico esté dentro de un rango específico.

**Ejemplo:**
```python
def solicitar_numero_positivo(mensaje):
    while True:
        numero = solicitar_numero(mensaje)
        if numero > 0:
            return numero
        else:
            print("Por favor, introduce un número positivo.")
```

**3. Validación de Opción**

Comprueba que la entrada del usuario coincida con una de las opciones válidas.

**Ejemplo:**
```python
def solicitar_operacion():
    while True:
        operacion = input("Introduce la operación (+, -, *, /, **, %): ")
        if operacion in ["+", "-", "*", "/", "**", "%"]:
            return operacion
        else:
            print("Operación no válida. Por favor, elige una de las opciones disponibles.")
```

---

#### **3. Implementación de Validaciones en la Calculadora**

Ahora, vamos a incorporar validaciones adicionales en la calculadora que has estado desarrollando.

**Código de la Calculadora con Validaciones Mejoradas:**
```python
def solicitar_numero(mensaje):
    while True:
        try:
            return float(input(mensaje))
        except ValueError:
            print("Por favor, introduce un número válido.")

def solicitar_numero_positivo(mensaje):
    while True:
        numero = solicitar_numero(mensaje)
        if numero > 0:
            return numero
        else:
            print("Por favor, introduce un número positivo.")

def solicitar_operacion():
    while True:
        operacion = input("Introduce la operación (+, -, *, /, **, %): ")
        if operacion in ["+", "-", "*", "/", "**", "%"]:
            return operacion
        else:
            print("Operación no válida. Por favor, elige una de las opciones disponibles.")

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

#### **4. Corrección de Errores Comunes**

Durante el desarrollo de software, es común encontrar errores. Saber cómo identificarlos y corregirlos es una habilidad esencial.

**Errores Comunes en la Programación:**
- **Errores de Sintaxis**: Ocurren cuando se escribe un código que no sigue las reglas del lenguaje.
- **Errores Lógicos**: Ocurren cuando el programa se ejecuta sin fallar, pero no produce el resultado esperado.
- **Errores de Ejecución**: Ocurren durante la ejecución del programa, como dividir por cero o acceder a una variable no definida.

**Cómo Abordar los Errores:**
- **Leer el Mensaje de Error**: Los mensajes de error suelen indicar la línea del código donde ocurrió el problema.
- **Depurar Paso a Paso**: Ejecuta el programa paso a paso para identificar dónde comienza el problema.
- **Imprimir Variables**: Usa `print` para verificar el valor de las variables en diferentes etapas del programa.

---

#### **5. Práctica: Depuración y Corrección**

**Ejercicio 1:**
Identifica y corrige los errores en el siguiente código:

```python
numero1 = input("Introduce el primer número: ")
numero2 = input("Introduce el segundo número: ")

resultado = numero1 / numero2
print("El resultado es: " + resultado)
```

**Posibles Errores:**
1. `input` devuelve un valor de tipo `str`, y se está intentando dividir directamente.
2. `resultado` debe ser convertido a `str` para ser concatenado con la cadena.

**Código Corregido:**
```python
numero1 = float(input("Introduce el primer número: "))
numero2 = float(input("Introduce el segundo número: "))

if numero2 != 0:
    resultado = numero1 / numero2
    print("El resultado es: " + str(resultado))
else:
    print("Error: División por cero no permitida.")
```

---

#### **6. Resumen**

Hoy aprendiste la importancia de la validación de datos, implementaste validaciones adicionales en tu calculadora básica, y te familiarizaste con la identificación y corrección de errores comunes en la programación. Estas habilidades son fundamentales para desarrollar programas robustos y confiables.

**Tarea**: Revisa tu código de la calculadora y busca posibles errores lógicos o de ejecución. Intenta mejorarlo aún más con nuevas validaciones o características.