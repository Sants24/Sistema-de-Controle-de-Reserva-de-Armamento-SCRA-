from django.db import models
from django.contrib.auth.models import User

class Perfil(models.Model):
    TIPOS = (
        ('ADMIN', 'Administrador'),
        ('RESP', 'Responsável'),
        ('USER', 'Usuário comum'),
    )

    user = models.OneToOneField(User, on_delete=models.CASCADE)
    tipo = models.CharField(max_length=10, choices=TIPOS)

    def __str__(self):
        return f"{self.user.username} ({self.tipo})"
