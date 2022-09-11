"""empty message

Revision ID: 4d05149cf8a3
Revises: bea4b6d5e317
Create Date: 2022-09-11 11:40:27.441873

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '4d05149cf8a3'
down_revision = 'bea4b6d5e317'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('animal_type',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('animal', sa.String(length=80), nullable=False),
    sa.Column('is_active', sa.Boolean(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('category',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('category', sa.String(length=80), nullable=False),
    sa.Column('is_active', sa.Boolean(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.add_column('products', sa.Column('animal_type_id', sa.Integer(), nullable=True))
    op.add_column('products', sa.Column('category_id', sa.Integer(), nullable=True))
    op.create_foreign_key(None, 'products', 'category', ['category_id'], ['id'])
    op.create_foreign_key(None, 'products', 'animal_type', ['animal_type_id'], ['id'])
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'products', type_='foreignkey')
    op.drop_constraint(None, 'products', type_='foreignkey')
    op.drop_column('products', 'category_id')
    op.drop_column('products', 'animal_type_id')
    op.drop_table('category')
    op.drop_table('animal_type')
    # ### end Alembic commands ###
