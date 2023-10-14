from sqlalchemy import Boolean, Column, Integer, String
from main import Base

class User(Base):
  __tablename__ = 'users'
  
  id = Column(Integer, primary_key=True, index=True)
  username = Column(String(50), unique=True,)
  
class Market(Base):
  __tablename__ = 'market'
  
class Transaction(Base):
  __tablename__ = 'transactions'