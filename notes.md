# Data Modeling Notes

## Requirements

A client has hired you to build an API for managing `zoos` and the `animals` kept at each `zoo`. The API will be use for `zoos` in the _United States of America_, no need to worry about addresses in other countries.

For the `zoos` the client wants to record:

- name.
- address.

For the `animals` the client wants to record:

- name.
- species.
- list of all the zoos where they have resided.

Determine the database tables necessary to track this information.
Label any relationships between table.

## Class Notes

## A good data model

- Captures ALL information the system needs. 
- Captures ONLY the information that system needs.
- Reflect reality (from point of view of the system).
- Is Flexible, can evolve with the system. 
- Guarantees `data integrity`.
- Is driven by the way we access data.
- Zip codes: Luis uses varchar, 10 (for searching), for ids/primary keys: integers are faster

## Components

- Entities (nouns: zoo, animal, species), like a resource --> tables.
- Properties --> columns or fields.
- Relationships --> foreign keys (FK).

## Workflow

- Identify entities (real ans transactional).
- Identify the properties.
- Identify relationships. 

## Relationships

- one to one
- one to many: this is the most common!
- many to many: this is smoke and mirrors.

_there are many animals in one species_

_there can be more than one animal in a zoo_

_an animal could have lived in more than one zoo_

## Mantras

- Every table must have a **Primary Key**
- Work on **two or three** entities 
- **One to many** relationships are modeled using a **Foreign Key**
- The **Foreign Key** always goes in the **many** side
- The **Foreign Key Column** must be **same type** as the **Primary Key** it references.
- **Many to many** relationships are modeled using a **third table**
