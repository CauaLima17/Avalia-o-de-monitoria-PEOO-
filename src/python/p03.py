from dataclasses import dataclass

@dataclass
class Data:
    dia: int
    mes: int
    ano: int

@dataclass
class Estudante:
    nome: str # Com no mínimo, nome e sobrenome
    matricula: str
    data_nascimento: Data

