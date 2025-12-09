from django.db import models

class Armamentos(models.Model):
    TIPO = (
        ('PISTOLA', 'Pistola'),
        ('RIFLE',   'Rifle'),
        ('ESPINGARDA', 'Espingarda'),
    )

    nome = models.CharField(max_length=100)
    tipo = models.CharField(max_length=20, choices=TIPO)
    numero_serie = models.CharField(max_length=50, unique=True)
    disponivel = models.BooleanField(default=True)

    def __str__(self):
        return f"{self.nome} ({self.numero_serie})"
