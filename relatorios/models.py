from django.db import models

class RelatorioRegistro(models.Model):
    nome = models.CharField(max_length=100)
    data_geracao = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.nome
